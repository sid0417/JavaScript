 let includeUpperCase = false;
 let includeLowerCase = false;
 let includeUpperCase = false;
 let includeUpperCase = false;


if(document.getElementById("includeUpperCase").checked){
      includeUpperCase = true;
}
includeNumber = includeNumber.checked ? true : false;

includeSymbol = includeSymbol.checked ? true : false;

let passwordLength = 12;

function generatePassword(passwordLength, includeLowerCase,
      includeUpperCase,includeNumber,includeSymbol){
            const lowercase = "abcdefghijklmnopqrstuvwxyz";
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numbers = "1234567890";
            const symbols = "!@#$%^&*()_+{}|:?><";
            let allowedchars="";
            let password="";
            allowedchars+=includeLowerCase? lowercase : "";
            allowedchars+=includeUpperCase? uppercase : "";
            allowedchars+=includeNumber? numbers : "";
            allowedchars+=includeSymbol?symbols: "";
            
            if(passwordLength<=0) return`Length must be greater than 1`;
            if(allowedchars.length===0) return`Atleast one set of characters needed`;

            for(let i =0;i<passwordLength;i++){
                  const randoIndex = Math.floor(Math.random()*allowedchars.length);
                  password+=allowedchars[randoIndex];
            }

 return  password;
}

let password = generatePassword(passwordLength, includeLowerCase,
      includeUpperCase,includeNumber,includeSymbol);
      console.log(password);
      document.getElementById("result").textContent=password;