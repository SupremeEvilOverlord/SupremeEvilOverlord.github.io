let feels = [{
  name: "happy",
  color: "yellow",
  red: 255,
  green: 251,
  blue: 0,
  image: 'photos/pics_4.png'
}, {
  name: "sad",
  color: "blue",
  red: 18,
  green: 255,
  blue: 251,
  image: 'photos/pics_1.png'
}, {
  name: "melancholey",
  color:"green",
  red: 59,
  green: 522,
  blue: 38,
  image: 'photos/pics_5.png'
}, {
  name: "surprise",
  color:"orange",
  red: 255,
  green: 156,
  blue: 43,
  image: 'photos/pics_2.png'
}, {
  name: "angry",
  color:"red",
  red: 191,
  green: 0,
  blue: 0,
  image: 'photos/pics_6.png'
}, {
  name: "lonely",
  color:"black",
  red: 168,
  green: 168,
  blue: 168,
  image: 'photos/pics_3.png'
}];

    let randomIndex;
    let animating = false;
    let counter = 0;
    let img;

    function preload() {
      img = loadImage(feels[0].image);
    }

    function setup() {
      createCanvas(600, 600);
      background(85, 250, 209);
      textSize(32);
      text("click to find your emotion", 50, 50);
    }

    function draw() {
     if(animating == true){
       console.log('randomIndex ' + randomIndex);
       if(randomIndex === undefined) {
         randomIndex = 0;
       }
       console.log('feels.length ' + feels.length);
       if(feels.length > 0) {

         fill(feels[randomIndex].red, feels[randomIndex].green,
           feels[randomIndex].blue);
         stroke(0);
         strokeWeight(3);
         text(`${feels[randomIndex].name}'s color is ${feels[randomIndex].color}`, 50, 50);

       } else {
         fill(0,0,0);
       }
       noStroke();
       loadImage(feels[randomIndex].image, img => {
         image(img, 100, 110, 400, 400);
       });
       square(random(width), random(height), random(0, 150), random(0, 50));

     }
    }

    function randomizer() {
      animating = false;
      if (feels.length > 0){
        randomIndex = int(random(feels.length-1));
        //delete an item from the array
        feels.splice(randomIndex, 1);
      } else {
        background(85, 250, 209);
        text("no emotion!", 50, 50);
      }
    }

    function mousePressed() {
      animating = true;
      background(0,0,0);
      setTimeout(randomizer, 2000);
    }
