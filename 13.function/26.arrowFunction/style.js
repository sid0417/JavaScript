//Arrow function : a consice way to write a function expression
//                 for a function that get used once
//                 (paramets)=> code

const nums = [1,2,3,4,5]
//declaration

const sqdec = nums.map(squareDec)
console.log(sqdec)
function squareDec(element){
  return Math.pow(element,2)
}

//expression
const sqexp = nums.map(function(element){return Math.pow(element,2)})
console.log(sqexp)

//arrow
const sqarrow = nums.map((element)=> Math.pow(element,2))
console.log(sqarrow)

hello()
function hello(){
    console.log("Hey Hello")
}
//setTimeout(function(){console.log("Now Goodbye")},5000)
setTimeout(()=>{console.log("Goodbye")
               console.log("Take Care")},5000 )
               