class Dustbin{

	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=100;
		this.Thickness=20;
		this.angle=0;	
		
		this.bottom=Bodies.rectangle(this.x, this.y, this.Width, this.Thickness, {isStatic:true})
		this.left=Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
		Matter.Body.setAngle(this.left, this.angle);
		

		this.right=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
		Matter.Body.setAngle(this.right, -1*this.angle);
		World.add(world, this.bottom)
		World.add(world, this.left)
		World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.bottom.position;
			var posLeft=this.left.position;
			var posRight=this.right.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.Thickness, this.Height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.Thickness, this.Height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.Width, this.Thickness);
			pop()
			
	}

}