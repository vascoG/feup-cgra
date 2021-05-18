import {CGFobject} from '../lib/CGF.js';
import {MyMovingObject} from './MyMovingObject.js';
import {MyFish} from './MyFish.js';

export class MyAnimatedFish extends MyMovingObject{

	constructor(scene,r,g,b,ratio,xc,zc,delta){
		super(scene);
		this.myfish = new MyFish(this.scene,r,g,b,ratio);
		this.xc=xc;
		this.zc=zc;
		this.delta=delta*20; //20 porque o t aumenta a cada 50 ms
	}
	update(t)
	{	
        this.angle=t*2*Math.PI/(this.delta); 
		this.x=this.xc+5*Math.sin(this.angle*Math.PI/180);
		this.z=this.zc+5*Math.cos(this.angle*Math.PI/180);
		this.myfish.updateTailAngle(t,5*2*Math.PI/100);
		this.myfish.updateFinAngle(t);
		
	}

	display()
	{
	this.scene.pushMatrix();
	this.scene.translate(this.x,this.y,this.z);
	this.scene.translate(this.myfish.x,this.myfish.y,this.myfish.z);
	this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
	this.scene.rotate(90*Math.PI/180,0,1,0);
    this.scene.rotate(this.angle*Math.PI/180,0,1,0);
	this.myfish.display();
	this.scene.popMatrix();

	}

}
