const display=document.getElementById("display");

function appendToDisplay(input){
        display.value +=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
   try{
    display.value=eval(display.value);
   }
    //eval fun take input and evalute and get result

    catch(error){
            display.value="Error";
    }
}