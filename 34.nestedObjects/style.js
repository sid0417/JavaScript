//Nested Objects = Objects inside other objects
                  //  Allows you to represent more complex ds
                  //  Child object is enclosed by a parent object

                  //  Person{address{},contactinfo{}}
                  //  ShoppingCart{Keyboard{},mouse{},monitor{}}

const person = {
      fullname : "Spongebob",
      age: 30,
      isStudent: true,
     hobbies:["karate","jellyfish","cooking"],
     address:{
      street: "124 conch street",
      city:"Bikini Bottom",
      country:"Internation Ocean"
     }
}
console.log(person.fullname);
console.log(person.age)
console.log(person.address)
console.log(person.address.city)
for(const property in person.address){
      console.log(person.address[property])
}

class Person{
      constructor(name,age,...address){
      this.name = name;
      this.age = age;
      this.address = new Address(...address);
      }
}

class Address{
      constructor(street,city,code,country){
            this.street = street;
            this.city = city;
            this.code = code;
            this.country = country;
      }
}

const person1 = new Person("Sidd",22,"27B","kolkata",700070,"India");
const person2 = new Person("spngbob",30,"124 conch  street","bikini bottom",8000,"Int. Ocean");
const person3 = new Person("Sidd",22,"27B","kolkata",700070,"India");

console.log(person1.name)
console.log(person1.address)
console.log(person2.address)