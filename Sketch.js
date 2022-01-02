//Defining global variables
var player; // pc
var gangster, pedestrian; //NPC
var rock, spikes; //Obstacles
var soda, HP, sheild, bullets; //Collectables

//Variables for images
var playerimg, gangsterimg, rockimg, pedestrianimg, spikesimg, sodaimg, hpimg, sheildimg, bulletsimg, bg;


function preload() {

    bg = loadImage("Images/background.jpg");
    playerimg = loadImage("Images/player.png");
    gangsterimg = loadImage("Images/gangster.png");
    hpimg = loadImage("Images/heart.png");
    pedestrianimg = loadImage("Images/npc.png");
    rockimg = loadImage("Images/rock.png");
    spikesimg = loadImage("Images/spikes.png");
    sodaimg = loadImage("Images/sodacan.png");
    sheildimg = loadImage("Images/sheild.png");
    bulletimg = loadImage("Images/bullet.png");


}
function setup() {

    createCanvas(displayWidth - 20, displayHeight - 150);
    player = createSprite(displayWidth/2, displayHeight/2 -100, 20,20);


}

function draw() {
 background("green");




    drawSprites();
}

