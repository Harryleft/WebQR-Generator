document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('qrToggle');
    
    // 加载当前设置
    chrome.storage.sync.get(['qrCodeEnabled'], function(result) {
        toggle.checked = result.qrCodeEnabled !== undefined ? result.qrCodeEnabled : true;
    });
    
    // 监听开关变化
    toggle.addEventListener('change', function() {
        chrome.storage.sync.set({
            qrCodeEnabled: toggle.checked
        }, function() {
            // 通知当前标签页更新二维码状态
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        type: 'toggleQRCode',
                        enabled: toggle.checked
                    });
                }
            });
        });
    });
}); 
