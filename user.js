
const newData = require('./updated.js')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Enter the content session ID: ', (contentSessionId) => {
  const matchedEvents = newData.filter(item => item.content_session_id === contentSessionId)
  
  if (matchedEvents.length > 0) {
    console.log("Matching events:", matchedEvents)
  } else {
    console.log("No events found")
  }

  readline.close()
});
