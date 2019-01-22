function takeANumber (line, name) {
  //line.push(name);
  console.log( "Welcome, " + name + ". You are number " + line.length + " in line.");
}
takeANumber("Sam", 4);


function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0] 
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

var katzDeliLine = [];

function currentLine (katzDeliLine) {
  var oneline = "";
  if(katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    for(let i = 0; i<katzDeliLine.length-1; i++) { 
      oneline += (i + 1) + ". " + katzDeliLine[i] + ", ";  
    }
     oneline += (katzDeliLine.length) + ". " + katzDeliLine[katzDeliLine.length - 1 ];
  }
    return "The line is currently: " + oneline;
}






/*
line1 = 1;
function takeANumber(line){
  line.push(line1);
  return "Welcome! You're ticket number" + (line1++);
}

function nowServing(line) {
  
}

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving #1" [2]
nowServing(line) // "Currently serving #2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]
*/





// add 3 people in line: Dopey, Bob, Boolean
// print out that current LiNE
// REMOVE tyhe 2nd person in the line

// takeANumber(katzDeliLinezzzzzz,"Dopey")


