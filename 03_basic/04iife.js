//IIFE immediately invoked function expressions

//used for removing the ploution  from global declration 
//using ()()

(function one(){

//nameiife

    console.log("db connceeted");
})();

( (name)=> {
    console.log(`dc connected again ${name}`);
})("akki")