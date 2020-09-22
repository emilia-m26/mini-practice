const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const facectx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();
// console.log(video, canvas, faceCanvas, faceDetector);

//write function that will populate users video

async function populateVideo() {
    //grabbing feed off user webcam
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height:720}
    });
    //console.log(stream);
    //set object to be strea,
    video.srcObject = stream;
    //play vid
    await video.play();
    //size canvases to be same size as video
    //console.log(video.videoWidth, video.videoHeight);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

populateVideo();