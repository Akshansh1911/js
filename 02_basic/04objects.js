//const tuser =new Object()it is a syntex of singleton obj
const tuser = {} //non singleton syntex 


tuser.id = "123abc"

console.log(tuser);


const obj1 ={1: 1, 2: 2}
const obj2 = {3:3, 4:4}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

console.log(Object.keys(tuser));  //this helps to convert the object itno the rrays
console.log(Object.values(tuser));

console.log(tuser.hasOwnProperty('id'));  //it help to find the property like if u have bulk of data it will take lots of time 


const course ={
    cname: "js ",
    cprice: "99",
    cinstructor: "Akki"
}

const {cinstructor} = course


console.log(cinstructor);



//Api

 //json

 