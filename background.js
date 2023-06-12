chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "hideDivContextMenu",
        title: "Hide Div",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "hideDivContextMenu") {
        chrome.tabs.sendMessage(tab.id, { action: "getDivId", x: info.x, y: info.y });
    }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "showDivId") {
        const divId = message.divId;
        if (divId) {
            chrome.browserAction.setPopup({ popup: `popup.html#${divId}` });
            chrome.browserAction.openPopup();
        }
    }
});
