chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getDivId") {
        const targetElement = document.elementFromPoint(message.x, message.y);
        const divId = targetElement ? targetElement.id : null;
        sendResponse({ divId: divId });
    }
});

chrome.runtime.sendMessage({ action: "getDivId", x: event.clientX, y: event.clientY }, function (response) {
    const divId = response.divId;
    if (divId) {
        const div = document.getElementById(divId);
        if (div) {
            div.style.display = "none";
        }
    }
});
