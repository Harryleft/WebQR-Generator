console.log('[Background] Service worker started');

// 监听标签页更新
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('[Background] 标签页更新:', changeInfo);
});

// 监听导航事件
chrome.webNavigation.onCompleted.addListener((details) => {
    console.log('[Background] 页面导航完成:', details);
});