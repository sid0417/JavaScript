//normal java array and stack combinaion = js array
//array declaration 
let fruits =["apple","banana","orange"];
//array call
console.log(fruits)
console.log(fruits[1])

fruits.push("coconut")//add from last
console.log(fruits)
fruits.pop();
console.log(fruits)//pop from last
fruits.unshift("mango")//add eleemnt in begining
console.log(fruits)

fruits.shift()//remove fro begining
console.log(fruits)

let n = fruits.length;
console.log(n);

console.log(fruits.indexOf("banana"))

for(let i =0;i<fruits.length;i++){
   console.log(fruits[i]);
}
//enhanced for loop
for(let fruit of fruits){
  console.log(fruit)
}
fruits.sort()
console.log(fruits)
fruits.sort().reverse();
console.log(fruits)


