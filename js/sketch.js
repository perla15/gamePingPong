var p;
var b;
var balls = [];
var p2;
function setup(){
    createCanvas(1300,600);
    p = new Player();
    b = new Ball();
    for(var i = 0; i < 5; i++){
      balls[i] = new Ball();
    }
    p2 = new Player2();
}

function draw(){
    background(0);
    rect(width/2,0,10,1300);
    textSize(48);
    fill('white');
    text(p.points, 30, 40);
    text(p2.points, width - 50, 40);
    p.show();
    p.move(b);
    b.show();
    p2.show();
    p2.keyPressed();
    b.move();
    if(b.collision(p))
      b.bx = 5;
    if(b.collision(p2))
      b.bx = -5;
    if(b.x < 0){
      p2.points++;
      gameOver();
    }
    if(b.x > width){
        p.points++;
        gameOver();
    }
}

function gameOver(){
    if(balls.length > 0)
      b = balls.pop();
    else {
      setup();
    }
}