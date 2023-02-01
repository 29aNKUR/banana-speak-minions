var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")



function clickHandler(){
    // console.log("clicked!");
    // console.log("input",txtInput.value);
    outputDiv.innerText = "asdfsdaf " + txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler);

