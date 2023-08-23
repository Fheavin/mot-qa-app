const tabVancouver = document.getElementById("tab-vancouver");

const tabPrinceGeorge = document.getElementById("tab-princegeorge");

const tabFraserValley = document.getElementById("tab-fraservalley");

const titleN = document.getElementById("title-n");

const titleFV = document.getElementById("title-fv");

 

tabVancouver.addEventListener("click", () => {

    titleN.textContent = "MOT-N";

   titleFV.textContent = "MOT-FV";

});

 

tabPrinceGeorge.addEventListener("click", () => {

    titleN.textContent = "MOT-V";

    titleFV.textContent = "MOT-FV";

});

 

tabFraserValley.addEventListener("click", () => {

    titleN.textContent = "MOT-N";

    titleFV.textContent = "MOT-V";

});

 

const squareN = document.getElementById("square-n");

const colorOptionsN = document.getElementById("color-options-n");

const setColorButtonN = document.getElementById("set-color-button-n");

 

setColorButtonN.addEventListener("click", () => {

    const selectedColor = colorOptionsN.value;

    squareN.style.backgroundColor = selectedColor;

});

 

const squareFV = document.getElementById("square-fv");

const colorOptionsFV = document.getElementById("color-options-fv");

const setColorButtonFV = document.getElementById("set-color-button-fv");

 

setColorButtonFV.addEventListener("click", () => {

    const selectedColor = colorOptionsFV.value;

    squareFV.style.backgroundColor = selectedColor;

});