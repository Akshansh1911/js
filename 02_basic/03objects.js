//singleton

//object litreals
const mysym = Symbol("key1")


const jsuser ={
    name: "Akshansh",
    [mysym]: "mykey1",
    age: 23,
    location: "Uttar Pradesh",
    email: "akki@xyz.mno"
}

console.log(jsuser.email);
//Object.crete for constructor
console.log(jsuser[mysym])
//console.log(typeof(jsuser[mysym]))

//Object.freeze is used to freeze the value of an object


jsuser.greeting = function(){
    console.log(`hello ,${this.name}`);
}

console.log(jsuser.greeting());