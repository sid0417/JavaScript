const increaseBt = document.getElementById("increaseBt");
const resetBt = document.getElementById("resetBt");
const decreaseBt = document.getElementById("decreaseBt");
const myLabel = document.getElementById("myLabel");
let count = 0;

increaseBt.onclick=function(){
      count++;
      myLabel.textContent=count;
}

resetBt.onclick=function(){
      count=0;
      myLabel.textContent=count;
}

decreaseBt.onclick=function(){
      count--;
      myLabel.textContent=count;
}