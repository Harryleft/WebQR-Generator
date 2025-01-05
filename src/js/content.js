console.log('[Content] Content script loaded!');

// 生成二维码
function generateQRCode(container) {
    console.log('[Content] 开始生成二维码');
    try {
        // 创建二维码包装器
        const qrWrapper = document.createElement('div');
        qrWrapper.className = 'qr-wrapper';
        
        // 创建二维码元素
        const qrElement = document.createElement('div');
        qrElement.id = 'qrcode';
        qrWrapper.appendChild(qrElement);
        
        // 创建标题元素
        const titleElement = document.createElement('h1');
        titleElement.id = 'site-title';
        titleElement.textContent = document.title || window.location.hostname;
        qrWrapper.appendChild(titleElement);
        
        // 添加到容器
        container.appendChild(qrWrapper);
        
        // 生成二维码
        new QRCode(qrElement, {
            text: window.location.href,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // 添加favicon到二维码中心
        const faviconOverlay = document.createElement('div');
        faviconOverlay.className = 'favicon-overlay';
        
        const faviconInQR = document.createElement('img');
        faviconInQR.src = `https://www.google.com/s2/favicons?sz=32&domain=${window.location.hostname}`;
        faviconInQR.className = 'favicon-in-qr';
        
        faviconOverlay.appendChild(faviconInQR);
        qrElement.appendChild(faviconOverlay);
        
        console.log('[Content] 二维码生成成功');
    } catch (error) {
        console.error('[Content] 生成二维码失败:', error);
    }
}

// 创建二维码容器
function createQRContainer() {
    console.log('[Content] 创建二维码容器');
    try {
        // 首先检查是否启用了二维码显示
        chrome.storage.sync.get(['qrCodeEnabled'], function(result) {
            const isEnabled = result.qrCodeEnabled !== undefined ? result.qrCodeEnabled : true; // 默认启用
            
            if (!isEnabled) {
                console.log('[Content] 二维码显示已禁用');
                return;
            }
            
            if (!document.getElementById('qr-container')) {
                const container = document.createElement('div');
                container.id = 'qr-container';
                
                document.body.appendChild(container);
                generateQRCode(container);
                console.log('[Content] 二维码容器创建成功');
            } else {
                console.log('[Content] 二维码容器已存在');
            }
        });
    } catch (error) {
        console.error('[Content] 创建二维码容器失败:', error);
    }
}

// 初始化函数
function initializeQRCode() {
    console.log('[Content] 初始化二维码');
    console.log('[Content] document.readyState:', document.readyState);
    if (document.readyState === 'loading') {
        console.log('[Content] 添加 DOMContentLoaded 监听器');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('[Content] DOMContentLoaded 触发');
            setTimeout(createQRContainer, 1000);
        });
    } else {
        console.log('[Content] 直接设置延时器');
        setTimeout(() => {
            console.log('[Content] 延时器触发，准备创建容器');
            createQRContainer();
        }, 1000);
    }
}

// 监听页面变化，确保二维码始终存在
const observer = new MutationObserver((mutations) => {
    console.log('[Content] DOM变化检测:', mutations.length, '个变化');
    if (!document.getElementById('qr-container')) {
        createQRContainer();
    }
});

// 开始观察 DOM 变化
function startObserving() {
    console.log('[Content] 开始设置观察器');
    if (document.body) {
        console.log('[Content] body 已存在，添加观察器');
        observer.observe(document.body, { childList: true });
    } else {
        console.log('[Content] body 不存在，等待 DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('[Content] DOMContentLoaded 触发，添加观察器');
            observer.observe(document.body, { childList: true });
        });
    }
}

// 使用立即执行函数确保初始化代码执行
(function() {
    console.log('[Content] 开始初始化');
    try {
        setTimeout(() => {
            console.log('[Content] 延迟初始化开始');
            initializeQRCode();
            startObserving();
            console.log('[Content] 延迟初始化完成');
        }, 100);
    } catch (error) {
        console.error('[Content] 初始化过程出错:', error);
    }
})();

// 监听存储变化
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.qrCodeEnabled) {
        const isEnabled = changes.qrCodeEnabled.newValue;
        const container = document.getElementById('qr-container');
        
        if (!isEnabled && container) {
            container.remove();
            console.log('[Content] 二维码已移除');
        } else if (isEnabled && !container) {
            createQRContainer();
            console.log('[Content] 二维码已重新显示');
        }
    }
});

// 导出函数供其他模块使用
window.generateQRCode = generateQRCode; 
