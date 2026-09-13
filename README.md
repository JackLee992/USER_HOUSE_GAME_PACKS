# 玩吧 / Nookcade · 游戏资源仓库

这个仓库发布 Android App 使用的游戏代码、美术和语言资源。App 安装包和原生内核独立维护在 [USER_HOUSE_ANDROID](https://github.com/JackLee992/USER_HOUSE_ANDROID)。

用户在玩吧 1.2.0 或更新版本的游戏列表/设置检查更新，查看新增内容后下载并安装，当前存档继续保留。App 1.3.0 进入原生首页时会自动检查，有更新才弹窗，下载与安装仍由用户选择。无需卸载 App，也无需 GitHub 登录。

## 最新内容

[游戏内容 1.6.7（content-20）](https://github.com/JackLee992/USER_HOUSE_GAME_PACKS/releases/tag/content-20) 将“拧螺丝”恢复为我们最初 fork 基线的原始实现，并继续把后续扩展版作为独立的“疯狂拧螺丝”提供。原版恢复普通模式的 42–47 块分层板件、无尽模式的 28–32 块持续补层，以及原始托盘、工具盒、遮挡、悬挂、重力、图标和画面样式；两款游戏的代码、素材与存档互不影响。

从 content-19 仅下载 `game.screwclassic`、`art.screwclassic` 和 `core` 三个变化包，共 635,154 字节，其余 80 包直接复用。当前快照包含 38 款游戏和 83 个独立资源包，可在玩吧内检查并安装，无需升级或卸载 App。

[发布后的 83 包验签与摘要检查已通过](https://github.com/JackLee992/USER_HOUSE_GAME_PACKS/actions/runs/34758199089)；发行使用 GitHub immutable release，公开 `channel.json` 的 SHA-256 为 `1c7507c8ccd9fe5b24bc27baccd911d3bff2daa3856778270aadfa39a9d8c349`。

酒馆插件用户可安装或直接更新到 [玩伴小屋 3.15.2](https://github.com/JackLee992/USER_HOUSE/releases/tag/v3.15.2)，同样获得 fork 基线原版“拧螺丝”和独立的“疯狂拧螺丝”。

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
