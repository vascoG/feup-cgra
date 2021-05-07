import {CGFobject} from '../lib/CGF.js';
import {MyAlga } from './MyAlga.js';


export class MyAlgaSet extends CGFobject {
	constructor(scene, number)
	{
		super(scene);
		this.number = number;
		this.algas = [];
		for(let i=0;i<this.number;i++)
		{
			this.algas.push(new MyAlga(scene,20,20));
		}
	}

	display()
	{

	for(let i=0;i<this.number;i++)
		{	
			this.scene.pushMatrix();
			this.scene.translate(this.algas[i].random1*3,0,this.algas[i].random2*3);
			this.scene.rotate(this.algas[i].random1*2*Math.PI, 0,1,0);
			this.algas[i].display();
			this.scene.popMatrix();
		}

	}

}