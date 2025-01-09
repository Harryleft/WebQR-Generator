document.addEventListener('DOMContentLoaded', function() {
    // 获取开关元素
    const toggle = document.getElementById('qrToggle');

    // 从存储中获取当前状态
    chrome.storage.sync.get(['qrCodeEnabled'], function(result) {
        // 设置开关初始状态，默认为开启
        toggle.checked = result.qrCodeEnabled !== undefined ? result.qrCodeEnabled : true;
    });

    // 监听开关变化
    toggle.addEventListener('change', function() {
        // 保存新状态到存储
        chrome.storage.sync.set({
            qrCodeEnabled: toggle.checked
        }, function() { 
            console.log('QR code display is ' + (toggle.checked ? 'enabled' : 'disabled'));
        });
    });
}); 
