

let a =100
// const b =20
// var c =30
if (true){
    let a =10 
    const b =20
   // var c =30 

   console.log("inner value ", a );
}
console.log(a);
// console.log(b);
//console.log(c);


function one(){
    const uname ="akki"
    function two(){
        const website ="github"
        console.log(uname);
        console.log(a);
    }
   // console.log(website);
    two()
}
one()

if (true){
    const uname = "akshansh"
    if(uname === "akshansh"){
        const website = " utube"
        console.log(uname + website);
    }

    //console.log(website);

}

//console.log(uname);