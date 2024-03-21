
const newData = require('./updated.js')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const options = {
  1:"content_session_id",
  2:"session_id",
  3:"event"
}
console.log("select an option:")
Object.keys(options).forEach(key => {
  console.log(`${key}. ${options[key]}`)
})
readline.question("Enter data required:",(choice) =>{
  switch (choice) {
    case '1':
      askContentSessionId()
       break;
    case '2':
      askSessionId()
      break;
    case '3':
      askEvent()
      break;
      default:
    console.log("invalid choice, try again") 
    readline.close()    

  }
})
function askContentSessionId (){
readline.question('Enter the content session ID: ', (contentSessionId) => {
  const matchedContentSession = newData.filter(item => item.content_session_id === contentSessionId)
  
  if (matchedContentSession.length > 0) {
    console.log("Matching events:", matchedContentSession)
  } else {
    console.log("No events found")
  }

  readline.close()
})
}

function askSessionId(){
  readline.question("Enter the session ID:",(sessionId) => {
    const matchedSessionId = newData.filter(item => item.session_id === sessionId)

    if(matchedSessionId.length > 0) {
      console.log("matching events:", matchedSessionId)
    }else{
      console.log("No event found")
    }
    readline.close()
  })
}
function askEvent(){
  readline.question("Enter the event:",(EventNo) => {
    const matchedEvents = newData.filter(item => item.event === EventNo)
    if(matchedEvents.length > 0) {
      console.log("matching events:", matchedEvents)
    }else{
      console.log("No event found")
    }
    readline.close()
  })
}
