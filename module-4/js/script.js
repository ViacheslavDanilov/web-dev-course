/*
 * Module 4 Assignment - Name Greeting Script
 * 
 * This script processes an array of names and outputs either "Hello" or "Good Bye"
 * based on the first letter of each name. Names starting with 'J' or 'j' get 
 * "Good Bye", all others get "Hello".
 */

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Process each name in the array
for (var i = 0; i < names.length; i++) {

  // Get the first letter of the current name (lowercase for comparison)
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Say goodbye to names starting with 'j', hello to all others
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();