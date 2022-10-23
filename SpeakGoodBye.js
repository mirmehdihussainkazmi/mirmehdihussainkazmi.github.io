function sayGoodBye(name) {
var speakWord = "Good Bye";

    console.log(speakWord + " " + name);


    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.text = 'Good bye';
    utter.volume = 0.5;
    
    window.speechSynthesis.speak(utter);
}