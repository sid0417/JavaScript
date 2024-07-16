//callback: a function that is passed as an argument to another function.
//agar hm function a() ko call kiye or uske baad b() ko call kiye agar a() jada time lagata hai toh a() k
// aage b() call ho jaega javascript mei a() ko aage call lagane k babjood islie ham log callback ka 
//use krte hai taki aage a() hoe tab h b() call hoe

//        : used to handle asynchronous operations
//         Reading a file
//         Network requets
//         Interacting with database


//normal-Although hello aage call hua hai magr execution k time goodbye aage print hoga keu ki hello jada time 
//laga rha 

hello();
goodbye();
function hello(){
      setTimeout(function(){
            console.log("Hello"),3000
      })
}
function goodbye(){
      console.log("Goodbye")
}

//Using Callback - hello1 k baad call back krna hai islie bas uska naam likh do call k time or func defination mei 
//callback likh do 

hello1(goodbye1)

function hello1(callback){
      setTimeout(function(){
            console.log("Hello1");
            callback();
            3000});    
}

function goodbye1(){
      console.log("Goodbye1")
}

//Another example


sum(displayPage,2,5)


function sum(callback,x,y){
      let result = x + y;
      callback(result)
}
 function displayPage(result){
      document.getElementById("myH1").textContent = result
 }