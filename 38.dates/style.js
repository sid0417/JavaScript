//Dates

// Wed Mar 06 2024 08:00:14 GMT+0530 
const date = new Date();
console.log(date)

//other ways 
//0-january...11-december
 const date1 = new Date(2024,0,1,2,3,4,5);
 console.log(date1)

 const date2 = new Date("2024-01-02T12:00:00Z");
 console.log(date2)

 const year = date.getFullYear();
 const month = date.getMonth();
 const date3 = date.getDate();
 const hours = date.getHours();
 const mins = date.getMinutes();
 //0-sunday
 const day = date.getDay();
 console.log(date3)
 console.log(day)

 //setting
 date.setFullYear(2025);
 console.log(date)


 const d1 = new Date("2024-0-13");
 const d2 = new Date("2023-12-2");
 if(d1>d2){
      console.log("Happy new Year")
 }else{
      console.log("BYE")
 }
