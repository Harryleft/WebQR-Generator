console.log('[Background] Service worker started');

// 监听标签页更新
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // 标签页更新时的处理逻辑
});

// 监听导航事件
chrome.webNavigation.onCompleted.addListener((details) => {
    // 页面导航完成时的处理逻辑
});
