//consonant(const)= are the type of variable that cant be changed
//so that malicious people cant alter our site

const PI = 3.1428
let radius 
let area
let circumference
document.getElementById("myButton").onclick=function(){
      radius = document.getElementById("myInput").value;
      radius = Number(radius);
      console.log(radius);
      circumference = 2*PI*radius;
      area = PI*radius*radius;
      document.getElementById("myH31").textContent="The circumference is "+circumference
      document.getElementById("myH32").textContent=`The area is `+area
      
}