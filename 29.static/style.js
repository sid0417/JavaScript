//static = keyword that defines properties or method that 
//         belong to a class itself rather than the objects 
//         created from the class
//         CLASS OWN ANYTHING STATIC NOT THE OBJECT

class MathUtil{
      static PI = 3.14159;
      static area(radius){
     return this.PI*radius*radius;
      }    
}
const math = new MathUtil();
//we cant access the value from the object as PI is static 
console.log(math.PI);
//but we can access using its class name
console.log(MathUtil.PI)

console.log(MathUtil.area(10).toFixed(1))