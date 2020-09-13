class Bob {
    constructor(x, y, radius) {
      var options = {
        
          'restitution':1,
          'friction':0,
          'density':0.8,
          isStatic:false
  
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
      push();
        fill("green");
      var pos =this.body.position;
      translate(pos.x, pos.y);
      ellipse(0,0,this.radius)
      pop();
     
      
      
    }
  }
  
