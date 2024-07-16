//spread operator(...) = allows an itrable such as an array and strings  
//                  to be expanded into seperate elemets
//                  (unpacks the element)
// let numbers =[1,2,3,4,5];
// let max = Math.max(numbers) this is not possible in JS
// let max = Math.max(...numbers)//spread operator is three dots
// console.log(max)

let name = "Siddharth Roy"
let arrayname = [...name]
console.log(arrayname)
//how to join it again??
let joined = arrayname.join("")
console.log(joined)//Siddharth Roy
let joined2 = arrayname.join("-")
console.log(joined2)//S-i-d-d-h-a-r-t-h- -R-o-y
 let fruits = ["apple","banana","mango"]
 let veges = ["bhindi","cauliflower","turnip"]
 let food = [...fruits,...veges,"egg","mutton"]//joining
 console.log(food)

//rest parameters = allows a function work with a varaible number
//                  of arguments by bunding them into array
//         spread = expands n array into seperate elemnent
//         rest = bundle seperate elemt into array


function add(...numbers){
      let ans= 0 ;
      for(let number of numbers){
    ans +=number;
      }
      return ans;
}
let ans = add(2,3);
console.log(ans);
ans = add(2,3,5,6,7,8);//so here ... bundels the group if element in array

console.log(ans);


