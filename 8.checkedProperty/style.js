//.checked property = a property that determines the checked state
//                    of a HTML checkbox or radio button

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mybutton = document.getElementById("mybutton");
const upiBtn = document.getElementById("upiBtn");
const subRes = document.getElementById("subRes");
const payRes = document.getElementById("payRes");



mybutton.onclick=function(){
      if(myCheckBox.checked){
            console.log(myCheckBox.checked)
            subRes.textContent=`You are subscribed`
      }
      else{
            subRes.textContent=`You are not subscibed`
      }
      if(visaBtn.checked){
            payRes.textContent=`You are paying by Visa `
      }
      else if(masterCardBtn.checked){
            payRes.textContent=`You are paying by Master Card`
      
      }
      else if(upiBtn.checked){
            payRes.textContent=`You are paying through UPI`
     }   
}
