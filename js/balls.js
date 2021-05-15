function Ball(){
	this.x = width / 2;
	this.y = height / 2;
	this.bx = -5;
	this.by = 5;

	this.show = function(){
		circle(this.x,this.y,20);
	} 
	this.move = function() {
		if(this.y < 1) 
			this.by = 5;
		if(this.y > height)
			this.by = -5;
		this.x += this.bx;
		this.y += this.by;
	}
	
  this.collision = function(p){
      var d = dist(this.x,this.y,p.x,p.y);
      var r = floor(random(2));
      if(d < 15 + 20){
        if(r === 1)
            if(this.y-p.y < 0)
              this.by = 5;
            else if(this.y - p.y == 0)
              this.by = 0;
            else
              this.by = -5;
        return true;
      }
      else
        return false;
    }
}