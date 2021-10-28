class Ground 
{
  //used to create objects
  constructor(x, y, w, h) 
  {
    //JSON -Java Script Object Notation object key:value
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
// function definition to show the object on canvas
  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill("blue");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


