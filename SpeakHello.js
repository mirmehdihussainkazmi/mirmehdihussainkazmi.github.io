function sayHello(name) {
    var speakWord = "Hello";
    
        console.log(speakWord + " " + name);
    
    
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.text = 'Hello';
    utter.volume = 0.5;
    
    window.speechSynthesis.speak(utter);
    
    }
    
