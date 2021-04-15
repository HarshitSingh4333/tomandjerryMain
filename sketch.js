var CatMoving , CatSleeping , CatSitting
var MouseGift , MouseRunning , MouseExamining;
var garden

function preload() {
    //load the images here
    CatMoving = loadImage("images/cat2.png")
    CatSleeping = loadImage("images/cat1.png")
    CatSitting = loadImage("images/cat4.png")


    garden = loadImage("images/garden.png")

    MouseRunning = loadImage("images/mouse2.png");
    MouseExamining = loadImage("images/mouse4.png");
    MouseGift = loadImage("images/mouse1.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  garden1 = createSprite(0 , 0 , 1000 , 800)
    garden1.addImage(garden);

    cat = createSprite(870,600);
    cat.addImage(CatSleeping);
    cat.scale=0.2;


    Mouse = createSprite(200,600);
    Mouse.addImage(MouseGift);
    Mouse.scale=0.5;


}

function draw() {  
    background(255);
text (mouseX + ',' + mouseY , 10 , 45);
if (cat.x - Mouse.x < (cat.width - Mouse.width)/2) {
    cat.velocityX = 0;
    cat.addAnimation("catsitting" , CatSitting);
    cat.changeAnimation(CatSitting);
    Mouse.addAnimation(MouseExamining);
    Mouse.changeAnimation(MouseExamining);
}

  
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5
        cat.addAnimation("catRunning" , CatMoving);
        Mouse.addAnimation("mouseRunning", MouseRunning);
        cat.changeAnimation(mouseRunning);

        
}
  //For moving and changing animation write code here


}

