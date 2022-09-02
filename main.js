Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function TakePhoto()
{
  Webcam.snap(function(data_uri) {
    document.getElementById("captured_gesture").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  })
 
}

console.log('ml5 version:', ml5.version);

function HandGesture()
{
  img = document.getElementById('captured_image');
  console.log(img)
  classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
  if(error){
    console.error(error);
  }else
    console.log(results);
    document.getElementById("result_gesture_prediction1").innerHTML = results[0].label;
    document.getElementById("result_gesture_prediction2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Thumbs Up")
    {
      document.getElementById("update_gesture_icon").innerHTML = "👍";
    }
    if(results[0].label == "Thumbs Down")
    {
      document.getElementById("update_gesture_icon").innerHTML = "👎";
    }
    if(results[0].label == "Victory")
    {
      document.getElementById("update_gesture_icon").innerHTML = "✌";
    }
    if(results[0].label == "Rock n Roll")
    {
      document.getElementById("update_gesture_icon").innerHTML = "🤟";
    }
    if(results[0].label == "Praying")
    {
      document.getElementById("update_gesture_icon").innerHTML = "🙏";
    }
    if(results[0].label == "Quiet Coyote")
    {
      document.getElementById("update_gesture_icon").innerHTML = "🤏";
    }
    if(results[0].label == "Amazing")
    {
      document.getElementById("update_gesture_icon").innerHTML = "👌";
    }

    if(results[1].label == "Thumbs Up")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "👍";
    }
    if(results[1].label == "Thumbs Down")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "👎";
    }
    if(results[1].label == "Victory")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "✌";
    }
    if(results[1].label == "Rock n Roll")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "🤟";
    }
    if(results[1].label == "Praying")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "🙏";
    }
    if(results[1].label == "Quiet Coyote")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "🤏";
    }
    if(results[1].label == "Amazing")
    {
      document.getElementById("update_gesture_icon1").innerHTML = "👌";
    }

}
  
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HikGFvzMo/model.json', modelLoaded)

function modelLoaded()
{
   console.log('Model Loaded');
}

function speak()
{
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + prediction_1;
  speak_data_2 = "And the second prediction is " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  utterThis.rate = 1;
  synth.speak(utterThis);
}