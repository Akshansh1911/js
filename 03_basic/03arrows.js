const user ={
    username: "akki",
    price: 900,
    welcomemsg: function(){
        console.log(`${this.username} , welcome`);
    }
}

//this is use to refer the value of current context


user.welcomemsg()

user.username = "lalal"
user.welcomemsg()

// function one(){
//     console.log(this);
// }
// one()

//arrow
// const onemore = function(){
//     let uname = "akki"
//     console.log(this.uname);
// }

// const onemore = ()=>{
//     let uname = "akki"
//     console.log(this.uname);
// }



const addtwo = (num1, num2) => {
    return num1 + num2

}

console.log(addtwo(5,6));