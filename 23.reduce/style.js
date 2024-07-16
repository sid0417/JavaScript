//.reduce() = reduce the element of an array into a single value

let nums = [1,2,3,4,56,102]
let sumValue = nums.reduce(sum)
console.log(sumValue)

function sum(prev,element){
    return prev + element;
}
//1st step , prev = 0 , element = 1;
//next step , prev = 1 , element = 2;
//next step , prev = 3 , element = 3;
//next step , prev = 6 , element = 4;
//next step , prev = 10 , element = 56;
//next step , prev = 66 , element = 102;
//return 168
let grades = [60,45,78,90,85]
let minGrade = grades.reduce(minm)

console.log(minGrade)
function minm(prev,element){
    return Math.min(prev,element)
}