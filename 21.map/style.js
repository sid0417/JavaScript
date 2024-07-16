//.map() = accepts a callback() ans applies that function
//         to each element of that array, THEN RETURN A NEW ARRAY
//the only diff between forEach and map is map returns a new array

const nums = [1,2,3,4,5];
const sqnums = nums.map(square)

console.log(sqnums)

function square(element,index,array){
      return Math.pow(element,2)
}

const dates = ["2-2024-19","2-2024-25","2-2024-29"]
const formatteddates = dates.map(formatdates)

console.log(formatteddates)

function formatdates(element){
const parts = element.split("-")
return `${parts[2]}/${parts[0]}/${parts[1]}`;
}