function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = soundClassifier('https://teachablemachine.withgoogle.com/models/AlGdYKZTB/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log("Got result");
}