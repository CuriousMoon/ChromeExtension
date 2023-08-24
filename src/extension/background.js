const webdriver = require("selenium-webdriver");

function executeSeleniumCode(code){
    chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
        if(message.action=="setChromeVersion"){
            cont chromeVersion = message.version;
            axios.get('https:chromedriver.storage.googleapis.com/LATEST_RELEASE_${chromeVersion}')
                .then(response => {
                    cont chromeDriverVersion = response.data;
                    const chromeDriverURL = 'https://chromedriver.storage.googleapis.com/${chromeDriverVersion}/chromedriver_win32.zip';
                    return axios({
                        method: "get",
                        url: chromeDriverURL,
                        responseType: "text"
                    });
                })
                .then(response => {
                    const chromeDriverScrpt = response.data;
                    //TODO: Save the binary data to a file or use directly
                    sendResponse({ success:false, error: error.message});
                });
            return true;
        }
    });
}