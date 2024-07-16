//function expressions : a way to define function as values
//                       or variables

//Function Declaration-|
let nums = [1,2,3,4,5,6]
let sq1 = nums.map(sqaure1)

console.log(sq1)

function sqaure1(element){
return Math.pow(element,2)
}

//When to use?
//when we need that function only once so no need to declare 
//globally
//Function Exprssions-|
let sq2 = nums.map(
    function(element){
    return Math.pow(element,2)
    });

    console.log(sq2)
    
    hello()
    function hello(){
        console.log("Hey Hello")
    }
    setTimeout(function(){console.log("Now Goodbye")},5000)

