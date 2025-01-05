# WebQR-Generater

一个Chrome 扩展程序，可以为当前访问的网页生成带有网站图标的二维码。

## 项目背景

该项目为【AI进化论-花生】的课程练习项目，详细信息参见[知识星球](https://articles.zsxq.com/id_pi7w45s5sqg3.html)

核心需求：作为视频创作者，在录制视频时经常需要向观众展示各种网站和工具。但在某些平台（如B站）的视频简介区和评论区，网页链接往往无法直接跳转，甚至发送链接本身就是违规行为。

开发该插件可以在视频录制时自动在页面右下角生成二维码，让观众能够直接扫码访问，无需后期编辑添加二维码。


## 功能特点

- 自动为当前网页生成二维码
- 二维码中心显示网站的 favicon 图标
- 二维码下方显示网站名称
- 支持自动开启/关闭二维码

## 项目结构

```markdown
root/
├── src/
│   ├── js/
│   │   ├── qrcode.js      # QR码生成库
│   │   ├── content.js     # 内容脚本
│   │   ├── background.js  # 后台脚本
│   │   └── popup.js       # 弹出窗口脚本
│   ├── css/
│   │   ├── content.css    # 内容样式
│   │   └── popup.css      # 弹出窗口样式
│   │   └── style.css      # 全局样式
│   └── html/
│       └── popup.html     # 弹出窗口HTML
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── manifest.json
```

## 安装方法

1. 访问 https://github.com/Harryleft/WebQR-Generator
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

本项目采用 MIT 许可证，详情请参见 LICENSE 文件。
