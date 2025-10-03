// Goodbye Speaker Module - handles farewell messages
(function(window) {

// Create byeSpeaker object
var byeSpeaker = {};

// Private variable for the farewell word
var speakWord = "Good Bye";

// Speak method to output goodbye message
byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};

// Expose byeSpeaker to global scope
window.byeSpeaker = byeSpeaker;

})(window);