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
}
function speak(){
    
}