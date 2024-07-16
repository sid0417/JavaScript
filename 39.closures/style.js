// closures : A function defined inside of another function
//            the inner function has acces to variables
//            and scope of the outer function
//            Allow for private variables and state maintenance
//           used frequently in JS frameworks: React,Vue Angular

function outer(){
      message = "goodbye"
      function inner(){
        console.log(message)
      }
      inner()
}
outer()
//the meain purpose of closure is make the variable secure 
//from outside if we change the message variable it will not chabge

//2nd example

function counterfunction(){
      count = 0;
      function increment(){
            count++;
            console.log(`The count is increased to ${count}`);
      }
      function getCount(){
            console.log(`The count is ${count}`)
      }
      //here we are returning as a object and we can return more than 1 object
      return {increment,getCount}
}
const counter = counterfunction();
counter.increment()
counter.increment()
counter.increment()
counter.getCount()