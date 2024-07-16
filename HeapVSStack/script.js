// Heap vs Stack  OR Primitive data type vs Non-Primitive data type

// Primitive
let myNumber = 29;
let newNumber = myNumber;
newNumber= 100;
console.log(myNumber);
console.log(newNumber);

// Non-Primitive 
let userOne ={
      name : "Siddharth",
      email: "userOne@gmail.com"
}
let userTwo = userOne
userTwo.email = "dusra@gmail.com"
console.log(userOne)
console.log(userTwo)