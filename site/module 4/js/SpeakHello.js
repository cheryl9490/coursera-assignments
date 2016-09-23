// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {

	// STEP 3:
	var helloSpeaker = {};
	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";
	// STEP 4:
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	// STEP 5:
	window.helloSpeaker = helloSpeaker;

}) (window);
