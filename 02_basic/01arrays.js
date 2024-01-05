/*
square brackets. []
parenthesis ()
curly braces {}

*/

const myArr = [4,5,2,6,8,3,9]

const newArr = new Array(432,6,765,78)
//array can have mix data types like string numbers boolen
// arrays are resizable it can be change 
//zero based indexing 
// in javascript arrays are not associative arrays  mean u cannot access using string values 


//Arrays Methods

myArr.push(6,7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(8) // helps to add value in first index of array
console.log(myArr);
myArr.shift() //remove first index array
console.log(myArr);
console.log(myArr.includes(9))//output comes in true or false


console.log(myArr.indexOf(2))



const newArray = myArr.join()// join help to convert arrays into string 
console.log(typeof(newArray));




//slice ,splice

console.log("a ",myArr );


const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("b ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("c ", myArr);