/*
let video;
let poseNet;
*/
let pose;
let skeleton;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  background(200);
  text(ml5.version, width/2, height/2);
  image(video, 0, 0);

  if (pose) {

    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x,eyeR.y,eyeL.x,eyeL.y);

    //bear ears
    fill(71, 53, 25);
    ellipse(pose.rightEye.x, pose.rightEye.y, 50);
    ellipse(pose.leftEye.x, pose.leftEye.y, 50);


// clown nose (like me)
    fill(255, 0, 0);
    //ellipse(pose.nose.x, pose.nose.y, d);
    stroke(2);
    triangle(125, 125, pose.nose.x,  pose.nose.y, pose.nose.x, pose.nose.y);
    triangle(125, pose.nose.y, pose.nose.x, pose.nose.y, pose.nose.x, pose.nose.y);
    triangle(125, 225, pose.nose.x, pose.nose.y, pose.nose.x, pose.nose.y);

    triangle(525, 125, pose.nose.x, pose.nose.y, pose.nose.x, pose.nose.y);
    triangle(525, pose.nose.y, pose.nose.x, pose.nose.y, pose.nose.x, pose.nose.y);
    triangle(525, 225, pose.nose.x, pose.nose.y, pose.nose.x, pose.nose.y);

//ears

   triangle(125, pose.rightEar.y, 125, 25, pose.rightEar.x, pose.rightEar.y);

//wrists
    fill(0, 0, 255);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0,255,0);
      ellipse(x,y,16,16);
    }
/*
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight();
      noStroke();
      line(a.position.x, a.position.y, b.position.x, b.position.y);

    }
*/
  }
}
