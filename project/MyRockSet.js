import {CGFobject} from '../lib/CGF.js';
import {MyRock } from './MyRock.js';


export class MyRockSet extends CGFobject {
	constructor(scene, number)
	{
		super(scene);
		this.number = number;
		this.rocks = [];
		for(let i=0;i<this.number;i++)
		{
			this.rocks.push(new MyRock(scene,20,20));
		}
	}

	display()
	{

	for(let i=0;i<this.number;i++)
		{	
			this.scene.pushMatrix();
			this.scene.translate(this.rocks[i].random1*2,0,this.rocks[i].random2*2);
			this.scene.rotate(this.rocks[i].random1*2*Math.PI, this.rocks[i].random2,0,this.rocks[i].random3);
			this.scene.scale(this.rocks[i].random1*0.1+0.1,this.rocks[i].random3*0.1+0.1,this.rocks[i].random2*0.1+0.1);
			this.rocks[i].display();
			this.scene.popMatrix();
		}

	}

}