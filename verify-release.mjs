import {readFile} from 'node:fs/promises';
import {createHash,createPublicKey,verify} from 'node:crypto';
const repository='JackLee992/USER_HOUSE_GAME_PACKS';
const tag=process.argv[2]||process.env.RELEASE_TAG;
if(!/^content-[1-9]\d*$/.test(tag||''))throw Error('Require content-N release tag');
async function get(url){const response=await fetch(url);if(!response.ok)throw Error(response.status+' '+url);return Buffer.from(await response.arrayBuffer());}
const envelope=JSON.parse(await get(`https://github.com/${repository}/releases/download/${tag}/channel.json`));
const payload=Buffer.from(envelope.payload,'base64'),key=createPublicKey({key:await readFile(new URL('./public-key.der',import.meta.url)),type:'spki',format:'der'});
if(envelope.schema!==1||!verify('sha256',payload,key,Buffer.from(envelope.signature,'base64')))throw Error('Signature invalid');
const manifest=JSON.parse(payload);if(manifest.releaseTag!==tag)throw Error('Wrong release tag');
let bytes=0;
for(const pack of manifest.packages){if(!pack.url.startsWith(`https://github.com/${repository}/releases/download/content-`)||!/^https:\/\/github\.com\/JackLee992\/USER_HOUSE_GAME_PACKS\/releases\/download\/content-[1-9]\d*\/[A-Za-z0-9._-]+\.zip$/.test(pack.url))throw Error('Unexpected archive URL');const file=await get(pack.url);if(file.length!==pack.size||createHash('sha256').update(file).digest('hex')!==pack.sha256)throw Error('Archive mismatch: '+pack.id);bytes+=file.length;console.log('PASS '+pack.id+' '+pack.version);}
console.log(JSON.stringify({tag,signature:true,packages:manifest.packages.length,bytes}));
