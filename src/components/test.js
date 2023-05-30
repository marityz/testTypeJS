const array = [1, 3,5,6,7,3,6,6,7,8,9,3];
//методы перебора

//  array.forEach((item, i, array)=>{
//     console.log(item + i, array)
// });

 const res = array.reduce((previousValue, currentValue)=>{
     return previousValue + currentValue

})

console.log(res)

