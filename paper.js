class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}
		this.image = loadImage("paper.png");

		this.r=r
		this.body=Bodies.circle(x,y, this.r/2, options);
		World.add(world, this.body);

	}
	display()
	{	
	    	var paperpos=this.body.position;		
			imageMode(CENTER);
			image(this.image, paperpos.x,paperpos.y,this.r, this.r)
	
	}

}