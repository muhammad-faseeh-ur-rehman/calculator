function addValue(value){
    display.value += value;
}
function deleteLast(){
    display.value = display.value.slice(0,-1);
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}