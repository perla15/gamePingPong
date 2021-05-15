function Player(){
   this.x = 0;
   this.y = height/2;
   this.v = 7;
   this.w = 20;
   this.h = 100;
   this.points = 0;

   this.show = function(){
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h)
   }

   this.move = function(b){
      if(p.y < mouseY)
       p.y += p.v;
     else if(p.y > mouseY)
       p.y -= p.v;
     }
   }
   function Player2(){
    this.x = width;
    this.y = height/2;
    this.v = 7;
    this.w = 20;
    this.h = 100;
    this.points = 0;

    this.show = function(){
      rectMode(CENTER);
      rect(this.x,this.y,this.w,this.h)
    }

  this.keyPressed = function(){
      if(keyCode === DOWN_ARROW)
       p2.y += p2.v;
     else if(keyCode === UP_ARROW)
       p2.y -= p2.v;
     }
}