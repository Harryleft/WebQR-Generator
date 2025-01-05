<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- 在文件底部添加徽章链接定义 -->
[contributors-shield]: https://img.shields.io/github/contributors/Harryleft/WebQR-Generator.svg?style=for-the-badge
[contributors-url]: https://github.com/Harryleft/WebQR-Generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Harryleft/WebQR-Generator.svg?style=for-the-badge
[forks-url]: https://github.com/Harryleft/WebQR-Generator/network/members
[stars-shield]: https://img.shields.io/github/stars/Harryleft/WebQR-Generator.svg?style=for-the-badge
[stars-url]: https://github.com/Harryleft/WebQR-Generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/Harryleft/WebQR-Generator.svg?style=for-the-badge
[issues-url]: https://github.com/Harryleft/WebQR-Generator/issues
[license-shield]: https://img.shields.io/github/license/Harryleft/WebQR-Generator.svg?style=for-the-badge
[license-url]: https://github.com/Harryleft/WebQR-Generator/blob/master/LICENSE


<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#项目背景">项目背景</a></li>
    <li><a href="#功能特点">功能特点</a></li>
    <li><a href="#项目结构">项目结构</a></li>
    <li><a href="#安装方法">安装方法</a></li>
    <li><a href="#使用说明">使用说明</a></li>
    <li><a href="#致谢">致谢</a></li>
    <li><a href="#许可证">许可证</a></li>
  </ol>
</details>

<div align="center">
  <a href="https://github.com/Harryleft/WebQR-Generator">
    <img src="icons/icon128.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">WebQR-Generator</h3>

  <p align="center">
    一个Chrome 扩展程序，可以为当前访问的网页生成带有网站图标的二维码
    <br />
    <a href="https://github.com/Harryleft/WebQR-Generator"><strong>查看文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Harryleft/WebQR-Generator/issues/new?labels=bug">报告Bug</a>
    ·
    <a href="https://github.com/Harryleft/WebQR-Generator/issues/new?labels=enhancement">功能建议</a>
  </p>
</div>

## 项目背景

该项目为【AI进化论-花生】的课程练习项目。

核心需求：作为视频创作者，在录制视频时经常需要向观众展示各种网站和工具。但在某些平台（如B站）的视频简介区和评论区，网页链接往往无法直接跳转，甚至发送链接本身就是违规行为。该插件可以在视频录制时**自动在页面右下角生成二维码**，让观众能够直接扫码访问，**无需后期编辑添加二维码**。


## 功能特点

- 自动为当前网页生成二维码
- 二维码中心显示网站的 favicon 图标
- 二维码下方显示网站名称
- 支持自动开启/关闭二维码

## 项目结构

```
WebQR-Generator/
├── icons/                # 图标资源目录
│   ├── icon16.png        # 16x16 图标
│   ├── icon48.png        # 48x48 图标
│   └── icon128.png       # 128x128 图标
├── src/                  # 源代码目录
│   ├── css/              # 样式文件
│   │   ├── content.css   # 内容页样式
│   │   ├── popup.css     # 弹出窗口样式
│   │   └── style.css     # 全局通用样式
│   ├── html/             # HTML 文件
│   │   └── popup.html    # 弹出窗口页面
│   └── js/               # JavaScript 文件
│       ├── background.js # 后台服务脚本
│       ├── content.js    # 内容注入脚本
│       ├── popup.js      # 弹出窗口脚本
│       └── qrcode.js     # 二维码生成脚本
├── LICENSE               # MIT 许可证文件
├── manifest.json         # 扩展配置文件
└── README.md             # 项目说明文档
```

## 安装方法

1. 访问 [WebQR-Generator 仓库](https://github.com/Harryleft/WebQR-Generator)
2. 点击“Code”按钮，选择“Download ZIP”   
3. 解压下载的文件
4. 访问：chrome://extensions/
5. 开启开发者模式
6. 点击“加载已解压的扩展程序”
7. 选择步骤3解压后的目录
8. 安装完成后，扩展栏会出现插件图标

## 使用说明
1. 插件安装后会自动在每个网页右下角生成二维码
2. 点击浏览器扩展栏的插件图标，可以控制二维码的显示/隐藏
3. 二维码显示状态会自动保存
4. 使用手机扫描二维码即可访问当前网页
5. 二维码会自动跟随网页切换而更新 


## 致谢

- 感谢【AI进化论-花生】的[知识星球](https://articles.zsxq.com/id_pi7w45s5sqg3.html)分享
- 感谢 [Cursor](https://www.cursor.com/) 提供的 AI 辅助功能
- 感谢 [qrcodejs2](https://github.com/davidshimjs/qrcodejs) 提供二维码生成功能


## 许可证

本项目采用 MIT 许可证。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>
