chrome.runtime.getBrowserInfo(function(info)){
    cont chromeVersion = info.version;
    chrome.runtime.sendMessage({action: "setChromeVersion", version:chromeVersion});
}