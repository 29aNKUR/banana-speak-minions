var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

// var serverURL = "https://api.funtranslations.com/translate/minion.json" 

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text;
} 

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with the server plese try again after sometime!");
}

function clickHandler(){
    // console.log("clicked!");
    // console.log("input",txtInput.value);
    // outputDiv.innerText = "asdfsdaf " + txtInput.value;
    var inputText = txtInput.value; //taking input

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);



// const text1 = "I am Ironman";
// const text2 = "I am Shaktimaan";

// function constructURL(text){
//     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text = " +text;
// } 

// constructURL(text1);

// //after getting the result

// function doFetch(text){

//     fetch(constructURL(text))
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// doFetch(text1)

