var song;

function  preload() {
  song = loadSound('assets/Mick Gordon - 11. BFG Division.mp3')
}

function setup() {
  
  createCanvas(720, 200);
  background(255,0,0);
}

function mouseClicked() {
  if (song.isPlaying() ) { 
    song.stop();
    background(0,255,255)
  } else {
    song.play();
    background(255,255,0);
  }
}