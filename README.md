# practices-js
my first repo
let string = "eQERsff#456@x9 JI0"

// create array of vowels
let vowels = "aeiou".split("")

let alphabets = "bcdfghjklmnpqrstvwxwz".split("");

let digits = "0123456789".split("")

let stringVowels="";
let stringAlphabets=""
let stringDigits = ""
let chars = "";

string.split("").forEach((elem)=>{
    stringVowels += getString(vowels, elem)
    stringAlphabets += getString(alphabets, elem)
    stringDigits += getString(digits, elem)
    //chars += getChars(vowels.concat(alphabets.concat(digits)), elem)
    chars += getString(vowels.concat(alphabets.concat(digits)), elem) ? "" : elem
 })


function getChars(category , stringElem,) {
    if (!category.includes(stringElem.toLowerCase())){
        return stringElem
    }
    return "";
}

function getString(category , stringElem) {
    if (category.includes(stringElem.toLowerCase())){
        return stringElem
    }
    return "";
}


console.log(stringVowels + " > " + stringVowels.length)
console.log(stringAlphabets + " > " + stringAlphabets.length)
console.log(stringDigits + " > " + stringDigits.length)
console.log(chars+ " > " + chars.length)
