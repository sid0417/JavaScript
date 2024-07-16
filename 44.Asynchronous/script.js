//Synchronous code - Synchronous code is executed in a sequence, meaning each statement waits for the previous
//one to finish before executing. This makes it easy to understand and debug because the flow of the program is 
//predictable

//Asynchronous code allows tasks to run in the background, enabling the program to continue executing without 
//waiting for the previous task to complete. This is useful for operations that take time, such as network requests
//or reading files.

//Handled with : Callbacks,Promises,Async/Await

// Example of Callback 


func1(func2)
function func1(callback){
      setTimeout(()=>{
            console.log("Task1");
            callback();
      })
}
function func2(){
      console.log("Task2");
      console.log("Task3");
      console.log("Task4");
}