//.filter() = create a new array by filtering out elemnts
//            return only value which are true
let nums = [1,2,3,4,5,6,7,8,9]
let even = nums.filter(isEven)

console.log(even)
function isEven(element){
      return element%2===0
}