const minNum=1 ;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
let attempts = 0;
let guess;
let running = true;

while(running){
          guess = window.prompt(`Enter the number between ${minNum} and ${maxNum}`);
           guess = Number(guess);
      if(isNaN(guess)){
            window.alert(`Please enter a valid number`)
      }
      else if(guess>maxNum||guess<minNum){
            window.alert(`Please enter a valid number`)
      }
      else{
            attempts++
            if(guess<answer){
                  window.alert(`TOO LOW!! Try again..`)
            }
            else if(guess>answer){
                  window.alert(`TOO HIGH!  Try again..`)
            }
            else{
                  window.alert(`Correct!! The number is ${answer} and you took ${attempts} number of attempts`)
                  running=false;
            }
      }
}
