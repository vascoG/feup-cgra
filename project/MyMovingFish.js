import {CGFobject} from '../lib/CGF.js';
import {MyMovingObject} from './MyMovingObject.js';
import {MyFish} from './MyFish.js';

export class MyMovingFish extends MyMovingObject{

	constructor(scene){
		super(scene);
		this.myfish = new MyFish(this.scene,1,0,0,0.4);
		this.up = false;
		this.down = false;
		this.caughtRock = false;
		this.rock;
	}

	rotateRight(){
		this.myfish.rotateright=true;
	}
	rotateLeft(){
		this.myfish.rotateleft=true;
	}

	reset(){
		this.velocity=0;
		this.angle=0;
		this.x=0;
		this.y=0;
		this.z=0;
		if(this.caughtRock){
			this.caughtRock=false;
			this.rock.x = this.rock.initialX;
			this.rock.z = this.rock.initialZ;
			this.rock.y = this.rock.initialY;
		}
	}
	update(t)
	{	if(this.myfish.y<=1)
			this.down = false;
		if(this.myfish.y>=4)
			this.up=false;
		this.x+=this.velocity*Math.sin(this.angle*Math.PI/180);
		this.z+=this.velocity*Math.cos(this.angle*Math.PI/180);
		this.myfish.updateTailAngle(t,this.velocity);
		this.myfish.updateFinAngle(t);
		if(this.up)
			this.myfish.y+=0.05;
		if(this.down)
			this.myfish.y-=0.05;
		if(this.caughtRock){
			this.rock.x = this.x+0.5*Math.sin(this.angle*Math.PI/180);
			this.rock.z = this.z+0.5*Math.cos(this.angle*Math.PI/180);
			this.rock.y = this.myfish.y;
			}
	}


	display()
	{
	this.scene.pushMatrix();
	this.scene.translate(this.x,this.y,this.z);
	this.scene.translate(this.myfish.x,this.myfish.y,this.myfish.z);
	this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
    this.scene.rotate(this.angle*Math.PI/180,0,1,0);
	this.myfish.display();
	this.scene.popMatrix();

	}



}
