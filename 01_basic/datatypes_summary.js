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


//************************************************/

//stack mermory used for primitive and heap memory used for non primitive

let myname = "akki";

let anothername = myname
anothername = "akki1911";

console.log(anothername);
console.log(myname);

let userone ={
    email : "xyz@gmail.com",
    upi : "akki@sbi" 

}

let usertwo = userone

console.log(userone.email);
console.log(usertwo.email);