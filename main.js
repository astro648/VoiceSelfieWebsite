var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if(content == "take my selfie"){
        console.log("Taking selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");