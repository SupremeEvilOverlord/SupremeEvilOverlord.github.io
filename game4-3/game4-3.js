// (var api) a string with a path
var api = "https://api.giphy.com/v1/gifs/search";
// the key. to the door lol.
//My key 'glTIPByT0X6KAmRStmhXEibQmWqb8wfu'
var apiKey = "&api_key=glTIPByT0X6KAmRStmhXEibQmWqb8wfu";
//term or phrase, the parameters
var query = "?q=tony+stark";
/*
  type whatever after the ?q= for the gif type you want
  add a '+' as spaces if the word is not one whole one
  ex: tony+stark or bucky+barnes versus avengers or supercalifragilisticexpialidocious
*/


function setup() {
  noCanvas();
  var url = api + query + apiKey
  //where gifs will load and appear from code
  loadJSON(url, gotData);
}

//giphy data [ data + data]
function gotData(giphy) {
  //to get multiple gifs for giphy
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}
function draw() {

}
