const  num = 4003545.5567
console.log(num);


const nm = new Number(100)
// console.log(nm);

// console.log(nm.toString().length);
// console.log(num.toPrecision(3));

// console.log(num.toLocaleString('en-IN'));

/************* maths ***************/


console.log(Math);

// console.log(Math.abs(-54));
// console.log(Math.round(45.6));   it gives the value in round figure
// console.log(Math.ceil(43.5));   it gives the value in higher range like for 45.7 is 46
// console.log(Math.floor(43252.65));  it gives the value in lower range like for 45.7 is 45
// console.log(Math.random()); it gives value btw 0 and 1
// console.log(Math.random()*10 +1);  it gives value in 1+ mode
// console.log(Math.floor(Math.random()*10) +1);   it gives random value in 1 digit 


const min = 1000
const max = 9999

console.log(Math.floor(Math.random()*(max-min+1)+min)); // by using this formula we can genrate the opt for 4 digit 