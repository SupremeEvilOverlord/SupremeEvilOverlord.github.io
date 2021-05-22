let feels = [{
  name: "brings the warmth that only I hold ", //To leave all emotions and have this one behold.
  color: " ",
  red: 255,
  green: 251,
  blue: 0,
  image: 'photos/pics_4.png'

},{
  name: "To leave all emotions and have this one behold ",
  color: " ",
  red: 255,
  green: 251,
  blue: 0,
  image: 'photos/pics_4.png'

}, {
  name: "With a blockade or even a façade ", //Changing the way you may feel
color: " ",
  red: 18,
  green: 255,
  blue: 251,
  image: 'photos/pics_1.png'


}, {
  name: "Changing the way you may feel ",
color: " ",
  red: 18,
  green: 255,
  blue: 251,
  image: 'photos/pics_1.png'

}, {
  name: "where you didn't know me not knowing her ", //It was all just in a different fantasy
  color:" ",
  red: 59,
  green: 522,
  blue: 38,
  image: 'photos/pics_5.png'

},{
  name: "It was all just in a different fantasy ",
  color:" ",
  red: 59,
  green: 522,
  blue: 38,
  image: 'photos/pics_5.png'

}, {
  name: "to send a meme instead of words ", //you cannot even give me a sight or surprise
  color:" ",
  red: 255,
  green: 156,
  blue: 43,
  image: 'photos/pics_2.png'

}, {
  name: "you cannot even give me a sight or surprise ",
  color:" ",
  red: 255,
  green: 156,
  blue: 43,
  image: 'photos/pics_2.png'

}, {
  name: "the doubt and betrayls for this once more ", //rage is the way
  color:" ",
  red: 191,
  green: 0,
  blue: 0,
  image: 'photos/pics_6.png'

}, {
  name: "rage is the way ",
  color:" ",
  red: 191,
  green: 0,
  blue: 0,
  image: 'photos/pics_6.png'

},{
  name: "I stood waiting for you to come ", //I stood waiting for you to come.
  color:" ",
  red: 168,
  green: 168,
  blue: 168,
  image: 'photos/pics_3.png'

}, {
  name: "Knowing that the sun wouldn't rise from the clouds that day ",
  color:" ",
  red: 168,
  green: 168,
  blue: 168,
  image: 'photos/pics_3.png'
}];

    let randomIndex;
    let animating = false;
    let counter = 0;
    let img;
    let img2;


    function preload() {
      img = loadImage(feels[0].image);
    }

    function setup() {
      createCanvas(2000, 1000);
      background(255);
     textSize(32);
      textFont('Courier new');
      //textALign(CENTER);
      frameRate(8);


      text("The Feeling machine", 50, 50);

      //createButton("click to find emotion");
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
         text(`${feels[randomIndex].name}do you feel this ${feels[randomIndex].color}`, 50, 50);

       } else {
         fill(0,0,0);
       }
       noStroke();
       loadImage(feels[randomIndex].image, img => {
         image(img, 100, 110, 400, 400);
         image(img, random(width), random(height), random(width), random(height));
         tint(feels[randomIndex].red, feels[randomIndex].green, feels[randomIndex].blue);

       });


     }
   }

    function randomizer() {
      animating = false;
      if (feels.length > 0){
        randomIndex = int(random(feels.length-1));
        //delete an item from the array
        feels.splice(randomIndex, 1);
      } else {
        background(255);
        text("How are you feeling now!", 50, 50);
        text("Has a sense of you cleared a bit now?", 100, 100);

      }
    }

    function mousePressed() {
      animating = true;
      background(0,0,0);
      setTimeout(randomizer, 2000);
    }
