//setTimeout() = function in javaScript that allows you to schedule
//              the execution of a function after an amount of time(milliseconds)
//              Times are approximate 
//              setTimeout(callback,delay);

// setTimeout(()=>window.alert("Hello"),3000)
//all type of function declariing works

//to clear we need to use a timerId
let timerId;
function setTimer(){
      timerId = setTimeout(()=>window.alert("Hello"),3000)
      console.log("Started")

}
function clearTimer(){
     clearTimeout(timerId)
      console.log("Ended")

}

