// Hello Speaker Module - handles greeting messages
(function(window) {

// Create helloSpeaker object
var helloSpeaker = {};

// Private variable for the greeting word
var speakWord = "Hello";

// Speak method to output hello message
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};

// Expose helloSpeaker to global scope
window.helloSpeaker = helloSpeaker;

})(window);