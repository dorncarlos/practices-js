
const firstArray = require('./data-short.js');
const final = require('./final.js');

firstArray.forEach(item=> item.event_description = final[item.event]);
console.log(firstArray);

