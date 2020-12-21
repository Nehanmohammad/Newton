class Hi {
    constructor(x,y,width,height){
      var options = {
        'density':9.999,
        'friction':5,
        'restitution':0.002,    
        'inertia': Infinity

      } 
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world,this.body)
    }
    display(){
     
     var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     fill ("lightgreen")
     ellipse(0,0,this.width,this.height);
      pop();
    
    }
}