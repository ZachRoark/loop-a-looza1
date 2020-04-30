// 1. Make an array from the one below called fave_demo 
// that contains only ages from 18 - 49 



const ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
const newArray = [];

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
const yoda_quote = ["the", "greatest", "teacher", "failure", "is"]


for (let i = 0; i < yoda_quote.length; i++) {
    const element = yoda_quote[i];
     if (element === "the") {
        const firstLetter = element.slice(0, 1).toUpperCase();
        const restOfWord = element.slice(1)
        const capThe = firstLetter + restOfWord;
        yoda_quote[i] = capThe
// console.log("2")
    }
if (element === "teacher") {
    const comma = element + ",";
    yoda_quote[i] = comma;
    }
}
const yodaFullQuote = yoda_quote.join(" ");
// console.log("3")
console.log(`Yoda says, "${yodaFullQuote}"`)