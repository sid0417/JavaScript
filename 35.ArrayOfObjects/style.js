const fruits = [{name:"apple",color:"red",calories:"102"},
                {name:"orange",color:"orange",calories:"89"},
                {name:"banana",color:"yellow",calories:"125"},
                {name:"pineapple",color:"yellow",calories:"50"}]
console.log(fruits)
console.log(fruits[2].calories)
fruits.push({name:"grapes",color:"green",calories:"123"})
console.log(fruits)
fruits.pop()
console.log(fruits)
//for each,map,filter,reduce all will work