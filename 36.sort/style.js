// sort() : method used to sort Element of an array in place 
//          sorts Element as strings in lexicographical order not alphabeticall
//          lexicographical = (alphabet+Number+Symbol) as a string

let fruits = ["apple","orange","banana","coconut","pineapple"]
fruits.sort();
console.log(fruits);

let numbers = [2,3,1,10,5,6,7,8];
// numbers.sort(); this alone is useless
numbers.sort((a,b)=>a-b)// to sort numbers
console.log(numbers)

const person = [{fullname : "Spongebob", age: 30, gpa:3.89},
{fullname : "Spng", age: 34, gpa:4.5},
{fullname : "bob", age: 10, gpa:2.3}
]
person.sort((a,b)=>a.age-b.age)
console.log(person)

//for reverse
person.sort((a,b)=>b.gpa-a.gpa)
console.log(person)

//for strings lexicog..

person.sort((a,b) => a.fullname.localeCompare(b.fullname))
console.log(person)
