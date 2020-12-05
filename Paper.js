class Paper
{
 constructor(x,y)
 {
  var options={
    isStatic:false,
    'restitution' : 0.1,
    'density' : 1.2,
    'friction' : 1.0
   }

  this.x = x;
  this.y = y;
  this.radius = 40;
  this.body = Matter.Bodies.circle(this.x, this.y, this.radius, options)
   World.add(world, circle);

 }
 display()
 {
   
   var groundPos=this.body.position;

   push()
   translate(groundPos.x, groundPos.y);
   ellipseMode(CENTER)
   strokeWeight(4);
   fill(255,0,255)
   ellipse(0,0,this.radius,this.radius);
   pop()
   
 }

}

