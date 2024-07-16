//for all the function of java script
//visit this url-->https://www.w3schools.com/js/js_string_methods.asp

// const name = `Siddharth Roy`
// //to print name in different line
// let first = name.slice(0,name.indexOf(" "));
// console.log(first);
// let last = name.slice(name.indexOf(" "));
// console.log(last)
//----------------------------------------------

//Method Chaining

//To enter a name and change the first world in capital rest small
let username = window.prompt("What is your name: ")
let name=username.trim();//The trim() method removes whitespace from both sides of a string:
let first = name.slice(0,1);
first = first.toUpperCase();
console.log(first)    
let rest = name.slice(1);
rest = rest.toLowerCase();
console.log(rest)
let ans = first+rest;
console.log(ans)