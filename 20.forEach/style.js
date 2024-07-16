//forEach = it is used to iterate over the elements of an array 
//          and apply specified function (calback)to each elemnt


let nums = [2,3,4,5,6];

nums.forEach(display)
// nums.forEach(square)
// nums.forEach(display)
nums.forEach(triple)
nums.forEach(display)

function display(element){
      console.log(element)
}

function square(element,index,array){
      array[index] = Math.pow(element,2)
}

function triple(element,index,array){
      array[index] = element*3;
}