const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const myButton = document.getElementById("myButton");
const myH4 = document.getElementById("myH4");
let min = 1;
let max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick=function(){
 randomNum1 = Math.floor((Math.random()*max)+min);
 randomNum2 = Math.floor((Math.random()*max)+min);
 randomNum3 = Math.floor((Math.random()*max)+min);

 label1.textContent=randomNum1;
 label2.textContent=randomNum2;
 label3.textContent=randomNum3;
 if(randomNum1==randomNum2&&randomNum1==randomNum3){
      myH4.textContent=`YOU WON`;
 }
}

