//classes: (ES6 feature) provides a more structured and cleaner 
//         way to work with objects compared totraditional constructor
//         functions... ex: static keyword,encapsulation,inheritence

class Product{
  constructor(name,prize)
{
this.name = name;
this.prize = prize;
}
//in class we do not need function keyword
displayProduct(){
console.log(`Product: $${this.name}`);
console.log(`Prize: $${this.prize.toFixed(2)}`)
}
calTotal(salesTax){
  let tot = this.prize+(this.prize*salesTax)
  return tot;
}

}

const salesTax = 0.05;
const prod1 = new Product("Shirt",30.70);
const prod2 = new Product("Pant",40.50);
const prod3 = new Product("Underwear",10.05);

prod1.displayProduct();
const total = prod1.calTotal(salesTax);
console.log(`Total prize of ${prod1.name} is ${total}`);

prod2.calTotal();
console.log(`Total prize of ${prod2.name} is ${prod2.calTotal(salesTax)}`);