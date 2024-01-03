/*primitive datatypes
7 types

string 
number
boolean 
null
undefined
bigInt
symbol




non primitive or refrence data type
array 
object
functions

*/


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


const heros = ["abc","mno","xyz"] //arrays example

//obj
let myObj = {
    name:"akshansh"
}


//functions
const myFunction = function()
{
    console.log("hello");
}
