const firstArray = require('./data-short.js')
const final = require('./final.js')
const fs = require('fs')

firstArray.forEach(item => item.event_description = final[item.event])
console.log(firstArray)

const strArray = JSON.stringify(firstArray, null, 2)
fs.writeFile("updated.js", strArray, (err) => {
})


