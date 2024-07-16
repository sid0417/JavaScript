//super = it is a keyword to call the constructor or 
//        or acess the properties of super class

class Animal{
   constructor(name,age){
   this.name = name;
   this.age = age;
   }

}

class Rabbit extends Animal{
   constructor(name,age,runspeed){
      super(name,age);
      this.runspeedspeed = runspeed
            }
}
class Fish extends Animal{
   constructor(name,age,swimspeed){
      super(name,age);
      this.swimspeed = swimspeed
            }
}
class Hawk extends Animal{
   constructor(name,age,flyspeed){
      super(name,age);
      this.flyspeed = flyspeed
      }
}

const rabbit = new Rabbit("bunny",3,20);
const fish = new Fish("fishyy",1,10);
const hawk = new Hawk("hawkee",6,30);
console.log(rabbit.name)
console.log(rabbit.age)
console.log(hawk.name)
