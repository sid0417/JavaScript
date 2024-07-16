class Animal{
       alive = true;

       eat(){
            console.log(`${this.name} is eating`)
       }
       
       sleep(){
            console.log(`${this.name} is sleepig`)
       }

}

class Rabbit extends Animal{
      name = "rabbit";
}
class Hawk extends Animal{
      name = "hawk"
}

const rabbit = new Rabbit();
console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()