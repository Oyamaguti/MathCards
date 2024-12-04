let musica

function preload(){
  musica = loadSound("trogonometriafunk.mp3")
}

function setup(){
  musica.play()
  musica.loop()
}