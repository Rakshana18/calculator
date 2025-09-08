let display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function checkResult(){
    try{
        display.value=eval(display.value);
    } catch(error){
        alert("Invalid input");
        clearDisplay();
    }
}