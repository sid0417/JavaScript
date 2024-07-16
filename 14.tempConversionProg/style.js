let textbox = document.getElementById("textbox");
let toFarenheit = document.getElementById("toFarenheit");
let toCelsius = document.getElementById("toCelsius");
let res = document.getElementById("res");

let temp;

function convert(){
if(toCelsius.checked){
      res.textContent="You selected to Farenheit"
      temp = Number(textbox.value);
      temp = (temp- 32)*(5/9);
      res.textContent = temp.toFixed(1) + "°C"
      toCelsius.checked=false;
}
else if(toFarenheit.checked){
      res.textContent="You selected to celsius"
      temp = Number(textbox.value);
      temp = temp*9/5 + 32;
      res.textContent = temp.toFixed(1) + "°F"
      toFarenheit.checked=false;
}
else{
      res.textContent="Please select"
}
}