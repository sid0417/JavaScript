//destructors: extract values from array and object
//             then assign them to a variable in a convinent way
//             [] to perform array distructing
//             {} to perform object distructing

//--------Example:1---------
//swap the values of two variables
let a = 24;
let b = 58;
[a,b]=[b,a];
console.log(a)
console.log(b)


//--------Example:2---------
//swap to elements in an array
const colors = ["red","blue","green","voilet","black"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors[0]);
console.log(colors[4]);


//--------Example:3---------
//assign array elements to variable
const[firstcolor,secondcolor,...remcolor] = colors;
console.log(firstcolor)
console.log(secondcolor)
console.log(remcolor)


//--------Example:4---------
//extract values from object
const person1 ={
      firstname : "spongebob",
      lastname : "squarepants",
      age : 30,
      job: "cartoon"
}
const person2 = {
      firstname : "Siddharth",
      lastname : "Roy",
      age : 22
}
//if nothng is there the use unemploy
const{firstname,lastname,age,job="unemploy"} = person2
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(job)


//--------Example:5---------
//destructure in function paramters
function displayPerson({firstname,lastname,age,job="unemploy"} ){
console.log(`name: ${firstname} ${lastname}`);
console.log(`age:${age}`)
console.log(`job:${job}`)
}
displayPerson(person1)
displayPerson(person2)