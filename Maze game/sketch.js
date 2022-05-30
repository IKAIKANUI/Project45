

var edges;
var playerImage;
function preload() {
    playerImage = loadImage("player.png");

}
function setup() {
    createCanvas(600, 550)
    //canvas = createCanvas(windowWidth, windowHeight);
    edges = createEdgeSprites();
    player = createSprite(10, 10, 10, 10);
    player.addImage(playerImage);
    player.scale = 0.005

    wall1 = createSprite(50, 5, 4, 50);
    wall1.shapeColor = "red";

    wall2 = createSprite(5, 40, 95, 4);
    wall2.shapeColor = "red";

    wall3 = createSprite(60, 53, 4, 90);
    wall3.shapeColor = "red";

    wall4 = createSprite(30, 50, 35, 4);
    wall4.shapeColor = "blue";
    wall4.velocityX = 4;
    wall4.velocityY = 0;

    wall5 = createSprite(50, 70, 4, 40);
    wall5.shapeColor = "red";

    wall6 = createSprite(60, 100, 50, 4);
    wall6.shapeColor = "red";

    wall7 = createSprite(27, 90, 50, 4);
    wall7.shapeColor = "red";

    wall8 = createSprite(25, 120, 4, 40);
    wall8.shapeColor = "red";

    wall9 = createSprite(10, 125, 4, 50);
    wall9.shapeColor = "red";

    wall10 = createSprite(37, 110, 4, 20);
    wall10.shapeColor = "red";

    wall11 = createSprite(25, 120, 35, 4);
    wall11.shapeColor = "blue";
    wall11.velocityY = 0;
    wall11.velocityX = 8;

    wall12 = createSprite(55, 130, 40, 4);
    wall12.shapeColor = "red";

    wall13 = createSprite(44, 120, 9, 9);
    wall13.shapeColor = "blue";
    wall13.velocityY = 0.8;

    wall14 = createSprite(90, 120, 40, 4);
    wall14.shapeColor = "red";

    wall15 = createSprite(90, 10, 40, 4);
    wall15.shapeColor = "red";

    wall16 = createSprite(379, 368, 48, 4);
    wall16.shapeColor = "red";

    wall17 = createSprite(357, 380, 4, 20);
    wall17.shapeColor = "red";

    wall18 = createSprite(65, 20, 10, 4);
    wall18.shapeColor = "red";

    wall19 = createSprite(72, 17, 4, 10);
    wall19.shapeColor = "red";

    wall20 = createSprite(7, 4, 2, 12);
    wall20.shapeColor = "red";

    wall21 = createSprite(40, 4, 2, 12);
    wall21.shapeColor = "red";

    wall22 = createSprite(115, 38, 10, 4);
    wall22.shapeColor = "red";

    wall23 = createSprite(110, 30, 4, 20);
    wall23.shapeColor = "red";

    wall24 = createSprite(120, 20, 4, 40);
    wall24.shapeColor = "red";

    wall25 = createSprite(95, 100, 4, 20);
    wall25.shapeColor = "red";

    wall26 = createSprite(77, 90, 20, 4);
    wall26.shapeColor = "red";

    wall27 = createSprite(69, 78, 4, 25);
    wall27.shapeColor = "red";

    wall28 = createSprite(69, 45, 4, 25);
    wall28.shapeColor = "red";

    wall29 = createSprite(95, 65, 40, 4);
    wall29.shapeColor = "blue";
    wall29.rotationSpeed = 5;

    wall30 = createSprite(65, 15, 20, 4);
    wall30.shapeColor = "blue";
    wall30.rotationSpeed = 8;

    wall31 = createSprite(95, 22, 27, 4);
    wall31.shapeColor = "red";

    wall32 = createSprite(83.5, 28, 4, 9);
    wall32.shapeColor = "red";

    wall33 = createSprite(77, 34, 18, 4);
    wall33.shapeColor = "red";

    wall34 = createSprite(134, 10, 25, 4);
    wall34.shapeColor = "red";

    wall35 = createSprite(148, 15, 4, 14);
    wall35.shapeColor = "red";

    wall36 = createSprite(175, 20, 50, 4);
    wall36.shapeColor = "red";

    wall37 = createSprite(200, 28, 4, 20);
    wall37.shapeColor = "red";

    wall38 = createSprite(181, 1, 25, 4);
    wall38.shapeColor = "blue";
    wall38.rotationSpeed = -8;

    wall39 = createSprite(216, 10, 25, 4);
    wall39.shapeColor = "red";

    wall40 = createSprite(230, 15, 4, 45);
    wall40.shapeColor = "red";

    wall41 = createSprite(90, 138, 4, 20);
    wall41.shapeColor = "red";

    wall42 = createSprite(49.5, 140, 53, 4);
    wall42.shapeColor = "red";

    wall43 = createSprite(20, 150, 25, 4);
    wall43.shapeColor = "red";

    wall44 = createSprite(30, 165, 4, 30);
    wall44.shapeColor = "red";

    wall45 = createSprite(14, 169, 4, 15);
    wall45.shapeColor = "red";

    wall46 = createSprite(6, 163, 20, 4);
    wall46.shapeColor = "red";

    wall47 = createSprite(6, 174.5, 12, 4);
    wall47.shapeColor = "red";

    wall48 = createSprite(5, 169, 30, 4);
    wall48.shapeColor = "blue";
    wall48.rotationSpeed = 8;

    wall49 = createSprite(30, 190, 60, 4);
    wall49.shapeColor = "red";

    wall50 = createSprite(58, 175, 4, 30);
    wall50.shapeColor = "red";

    wall51 = createSprite(45, 160, 30, 4);
    wall51.shapeColor = "red";

    wall52 = createSprite(37, 175, 20, 4);
    wall52.shapeColor = "blue";
    wall52.rotationSpeed = -8;

    wall53 = createSprite(380, 358, 66, 4);
    wall53.shapeColor = "red";

    wall54 = createSprite(348, 373, 4, 35);
    wall54.shapeColor = "red";

    wall55 = createSprite(49, 140, 53, 4);
    wall55.shapeColor = "red";

    wall56 = createSprite(49, 140, 53, 4);
    wall56.shapeColor = "red";

    wall57 = createSprite(49, 140, 53, 4);
    wall57.shapeColor = "red";

    wall58 = createSprite(49, 140, 53, 4);
    wall58.shapeColor = "red";

    wall59 = createSprite(49, 140, 53, 4);
    wall59.shapeColor = "red";

    wall60 = createSprite(49, 140, 53, 4);
    wall60.shapeColor = "red";

    wall61 = createSprite(49, 140, 53, 4);
    wall61.shapeColor = "red";

    wall62 = createSprite(49, 140, 53, 4);
    wall62.shapeColor = "red";

    wall63 = createSprite(49, 140, 53, 4);
    wall63.shapeColor = "red";

    wall64 = createSprite(49, 140, 53, 4);
    wall64.shapeColor = "red";

    Trophy = createSprite(250, 250, 30, 30);
    Trophy.shapeColor = "gold";

    walls = createGroup();
    walls.add(wall1);
    walls.add(wall2);
    walls.add(wall3);
    walls.add(wall5);
    walls.add(wall6);
    walls.add(wall7);
    walls.add(wall8);
    walls.add(wall9);
    walls.add(wall10);
    walls.add(wall12);
    walls.add(wall14);
    walls.add(wall15);
    walls.add(wall16);
    walls.add(wall17);
    walls.add(wall18);
    walls.add(wall19);
    walls.add(wall20);
    walls.add(wall21);
    walls.add(wall22);
    walls.add(wall23);
    walls.add(wall24);
    walls.add(wall25);
    walls.add(wall26);
    walls.add(wall27);
    walls.add(wall28);
    walls.add(wall31);
    walls.add(wall32);
    walls.add(wall33);
    walls.add(wall34);
    walls.add(wall35);
    walls.add(wall36);
    walls.add(wall37);
    walls.add(wall38);
    walls.add(wall39);
    walls.add(wall40);
    walls.add(wall41);
    walls.add(wall42);
    walls.add(wall43);
    walls.add(wall44);
    walls.add(wall45);
    walls.add(wall46);
    walls.add(wall47);
    walls.add(wall49);
    walls.add(wall50);
    walls.add(wall51);
    walls.add(wall53);
    walls.add(wall54);
    walls.add(wall55);
    walls.add(wall56);


    blue = createGroup();
    blue.add(wall4);
    blue.add(wall11);
    blue.add(wall13);
    blue.add(wall19);
    blue.add(wall30);
    blue.add(wall38);
    blue.add(wall48);
    blue.add(wall52);

}

function draw() {
    background("black");


    wall4.bounceOff(edges);
    //   wall4.bounceOff(edges[1]);
    //   wall4.bounceOff(edges[2]);
    //   wall4.bounceOff(edges[3]);
    player.collide(edges);
    wall4.bounceOff(walls);
    wall11.bounceOff(edges);
    //   wall11.bounceOff(edges[1]);
    //   wall11.bounceOff(edges[2]);
    //   wall11.bounceOff(edges[3]);
    wall13.bounceOff(walls);

    if (keyDown(LEFT_ARROW)) {
        player.velocityX = -2;
        player.velocityY = 0;
    }
    if (keyDown(RIGHT_ARROW)) {
        player.velocityX = 2;
        player.velocityY = 0;
    }
    if (keyDown(UP_ARROW)) {
        player.velocityX = 0;
        player.velocityY = -2;
    }
    if (keyDown(DOWN_ARROW)) {
        player.velocityX = 0;
        player.velocityY = 2;
    }
    if (keyDown("space")) {
        player.velocityY = 0;
        player.velocityX = 0;

    }
    player.collide(walls);
    if (player.isTouching(blue)) {
        player.y = 1;
        player.x = 1;
        player.velocityX = 0;
        player.velocityY = 0;

    }

    if (player.isTouching(Trophy)) {
        stroke("blue");
        fill("yellow");
        textSize(40);
        text("you win!",100,200);
      
    }
    camera.position.y = player.position.y;
    camera.position.x = player.position.x;
    drawSprites();

}
