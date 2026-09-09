# 玩吧 / Nookcade · 游戏资源仓库

这个仓库发布 Android App 使用的游戏代码、美术和语言资源。App 安装包和原生内核独立维护在 [USER_HOUSE_ANDROID](https://github.com/JackLee992/USER_HOUSE_ANDROID)。

用户在玩吧 1.2.0 或更新版本的游戏列表下拉刷新，或点击“检查更新”，查看新增内容后下载。下载完成后在首页安装，当前存档继续保留。无需卸载 App，也无需 GitHub 登录。

## 最新内容

[游戏内容 1.3.3（content-9）](https://github.com/JackLee992/USER_HOUSE_GAME_PACKS/releases/tag/content-9) 升级泡泡龙 1.0.3：按反馈去掉中心符号与厚重玻璃高光，采用六种差异化颜色和简洁完整圆球；当前球与下一颗预览保持清晰。图片不可用时仍是同一套纯色圆球。从资源 1.3.2 仅下载游戏与专属美术两个包，共 1,686,563 字节（约 1.61 MiB），其余 79 包复用，APK 无需更新。HONOR 真机与 Android 模拟器原生更新、换球发射、暂停保护、冷启动续局和存档恢复均已通过。

[泡泡龙新旧素材对比与实测](https://github.com/JackLee992/USER_HOUSE_ANDROID/blob/main/docs/bubble-visibility-upgrade.md)

此前的数独 1.1.0 经典全屏界面、笔记、撤销/重做、提示、四档唯一解新题与五语支持，以及祖玛 1.1.2 的共享 WebGL 资源管理均保留；内容更新后的首页状态修复也已包含。[数独竞品对标与实测截图](https://github.com/JackLee992/USER_HOUSE_ANDROID/blob/main/docs/sudoku-product-upgrade.md)

## 版本与产物

| 类型 | 版本归属 |
| --- | --- |
| App APK / WebView 或 GeckoView | Android 源码仓库的 App 版本 |
| core | 共享页面、目录和宿主接口 |
| game.<游戏ID> | 各游戏实际代码与专属引擎 |
| art.<游戏ID> / art.shared | 各游戏或共享图片资源 |
| i18n.zh-CN / zh-TW / en / ja / ko | 五种语言各自维护 |

发行标签为 `content-1`、`content-2` 等单调递增序号。每次发行包含签名 `channel.json`、便于审阅的 `manifest.json` 及本次变化的 ZIP。未变化的包继续引用旧发行 URL；它们的版本和摘要保持不变。仓库已启用 GitHub immutable releases，发布后不覆盖 ZIP 或移动标签。

每份清单携带 Android 源码 commit、包版本、包与文件 SHA-256、宿主兼容范围和存档格式。设备使用 APK 固定公钥验证 P-256 签名，下载内容只从这个仓库获取。完整新快照准备好以后再切换，失败保留旧版；已成功启动后的玩家进度不会随内容回退而恢复成旧存档。

## 维护者

在 [源码仓库的发布说明](https://github.com/JackLee992/USER_HOUSE_ANDROID/blob/main/docs/content-release.md) 查看构建、签名、验证和发布命令。游戏版本写在各插件 `GAME_VERSION`，美术/core/语言版本写在 `content/versions.json`。私钥只由发布方保存，不提交 Git，也不包含在 APK 中。

`public-key.der` 是初始 APK 的公开验证密钥。Actions 在每次发布后重新验签并下载检查全部包摘要。该检查不能代替发布前的真机兼容、存档和玩法测试。

许可证依照各包来源：代码与引擎许可证、CC0 球台资源声明和 GeckoView 许可均随 App 离线提供。生成美术的提示词和接入说明保存在源码仓库。
