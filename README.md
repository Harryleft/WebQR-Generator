# 网页二维码 Chrome 插件

一个Chrome 扩展程序，可以为当前访问的网页生成带有网站图标的二维码。

## 项目背景
该项目为【AI进化论-花生】的课程练习项目，详细信息参见[知识星球](https://articles.zsxq.com/id_pi7w45s5sqg3.html)

核心需求：作为视频创作者，在录制视频时经常需要向观众展示各种网站和工具。但在某些平台（如B站）的视频简介区和评论区，网页链接往往无法直接跳转，甚至发送链接本身就是违规行为。

开发该插件可以在视频录制时自动在页面右下角生成二维码，让观众能够直接扫码访问，无需后期编辑添加二维码。


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

## 待完成

- 支持自动检测右下角区域是否已有其他HTML元素，如果已有则将其上移

## 致谢

感谢【AI进化论-花生】的[知识星球](https://articles.zsxq.com/id_pi7w45s5sqg3.html)分享，以及感谢Cursor提供的AI辅助功能，让我有机会快速上手Chrome插件开发以解决现实问题。
