function setup(){
    //in these two we have create canvas and we have set the position of the canvas
    canvas=createCanvas(600,500);
    canvas.center()
    //in these two we have add webcam to our website and we have set the size of the webcam
    video=createCapture(VIDEO);
    video.hide();
}