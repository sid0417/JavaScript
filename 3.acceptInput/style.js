//How to take input
//  1. EASY WAY = window prompt
//  2. PROFESSIONAL WAY = HTML textbox

//Easy way

// let username = window.prompt("What isyour name?")
// console.log(username)

//prof way

let username;

document.getElementById("mybt").onclick=function(){
      username = document.getElementById("myIP").value
      console.log(username)
      document.getElementById("myH1").textContent=`its ${username}`
}
