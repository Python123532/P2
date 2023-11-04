
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function preload()
{
    
}
function draw()
{
    image(video, 0, 0, 380, 380);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = "true";
    objectDetector.detect(video, gotResult);
}
