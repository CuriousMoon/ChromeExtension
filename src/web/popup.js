const executeButton = document.getElmentById("executeButton");
const resultDiv = document.getElementById("result");
executeButton.addEventListener("click",()=>{
    cont code = document.getElementById("seleniumCode").value;
    chrome.runtime.sendMessage({action: "executeCode",code}, response =>{
        resultDiv.textContent = response.result;
    })})