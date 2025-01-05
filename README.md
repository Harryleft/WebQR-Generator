# 网页二维码 Chrome 插件

一个Chrome 扩展程序，可以为当前访问的网页生成带有网站图标的二维码。
## 应用场景


## 功能特点

- 自动为当前网页生成二维码
- 二维码中心显示网站的 favicon 图标
- 二维码下方显示网站名称

## 项目结构

```markdown
url2qr/
├── src/
│   ├── js/
│   │   ├── qrcode.js      # QR码生成库
│   │   ├── content.js     # 内容脚本
│   │   ├── background.js  # 后台脚本
│   │   └── popup.js       # 弹出窗口脚本
│   ├── css/
│   │   ├── content.css    # 内容样式
│   │   └── popup.css      # 弹出窗口样式
│   └── html/
│       └── popup.html     # 弹出窗口HTML
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── manifest.json
```

## 使用方法

1. 在 Chrome 浏览器中安装插件
2. 自动生成当前页面的二维码
3. 使用手机扫描二维码即可访问当前页面 