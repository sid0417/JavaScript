//objects: A collection of related properties and methods
//         can represent real world objects

//this:    same as Java
//         we cannot use this in arrow function

const person1 = {
  firstname: "Siddharth",
  lastname : "roy",
  age : 22,
  isEmployed: false,
  sayHello:function() {
    console.log(`Hello its me!${this.firstname}`)
    console.log("Nice to meet you")
  }
}
console.log(person1.firstname)
console.log(person1.isEmployed)
person1.sayHello()


//Constructor
function Car(make,model,year,color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color= color;

  this.drive = function(){console.log(`You are driving ${this.make}`)}
}

const car1 = new Car("Ford","Mustang",2024,"black")
const car2 = new Car("Tata","Safari",2023,"blue")

console.log(car1.make)
console.log(car2.make)

car2.drive()

