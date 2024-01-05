const marvel = ["thor","spiderman", "ironman"]
const dc = ["superman", "flash","batman"]

//marvel.push(dc)
console.log(marvel);





// const all = marvel.concat(dc)
// console.log(all);

const all_new = [...dc,...marvel] //easy method to concat two or more then two arrays in easy way
console.log(all_new);


console.log(Array.isArray("Akshansh"));
console.log(Array.from("Akshansh"));
console.log(Array.from({name: "Akshansh"})); //cant convert into array interesting fact

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3));
