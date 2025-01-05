document.addEventListener('DOMContentLoaded', function() {
    console.log('Popup loaded');
    
    // 向当前标签页注入二维码生成逻辑
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
            chrome.tabs.executeScript(tabs[0].id, {
                code: `
                    // 创建容器
                    const container = document.createElement('div');
                    container.id = 'qr-container';
                    container.style.position = 'fixed';
                    container.style.right = '20px';
                    container.style.bottom = '20px';
                    container.style.zIndex = '9999';
                                       
                    
                    // 添加到页面并生成二维码
                    document.body.appendChild(container);
                    generateQRCode(container);
                `
            });
            // 立即关闭 popup
            window.close();
        }
    });
}); 