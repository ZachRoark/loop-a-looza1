// 1. Make an array from the one below called fave_demo 
// that contains only ages from 18 - 49 



let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let newArray = [];

for (let i=0; i < ages.length; i++) {
    const num = ages[i]
    if (num >= 18 && num <= 49) {
    newArray.push(num)
    }
}
console.log(newArray)


// // 2. Loop over the following array and
// // 2a. capitalize 'the'
// // 2b. insert a comma after 'teacher'
// // 2c. output "Yoda says, "The greatest teacher, failure is"

// console.log("1")
let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
const yQ = [];

for (let i = 0; i < yoda_quote.length; i++) {
    let element = yoda_quote[i];
     if (element === "the") {
        let let1 = element.slice(0, 1).toUpperCase();
        let rOW = element.slice(1)
        let tHE = let1 + rOW;
        yoda_quote[i] = tHE
// console.log("2")
    }
if (element === "teacher") {
    let comma = element + ",";
    yoda_quote[i] = comma;
    }
}
const yQF = yoda_quote.join(" ");
// console.log("3")
console.log(`Yoda says, "${yQF}"`)