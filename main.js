
const firstArray = require('./data-short.js');
const final = require('./final.js');
const fs = require('fs');

firstArray.forEach(item=> item.event_description = final[item.event]);
console.log(firstArray)
const strArray = firstArray.map(item => `Event: ${item.event}, Description; ${item.event_description}`).join('\n');
//const strArray = firstArray.toString();
fs.writeFile("updated.js", strArray, (err) =>{
console.log(strArray)
})

