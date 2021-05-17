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
		let x=0.70*21,z=0.75*21;
		for( let j=0;j<this.number;j++){
			if(z+1>=0.75*29){
				z=0.75*21;
				x+=1;
			}else{
				z+=1;
			}
			this.rocks[j].nestX=x;
			this.rocks[j].nestZ=z;
		}
	}

	display()
	{

	for(let i=0;i<this.number;i++)
		{	
			this.scene.pushMatrix();
			this.scene.translate(this.rocks[i].x,this.rocks[i].y,this.rocks[i].z);
			this.scene.rotate(this.rocks[i].random1*2*Math.PI, this.rocks[i].random2,0,this.rocks[i].random3);
			this.scene.scale(this.rocks[i].random1*0.1+0.1,this.rocks[i].random3*0.1+0.1,this.rocks[i].random2*0.1+0.1);
			this.rocks[i].display();
			this.scene.popMatrix();
		}

	}

}