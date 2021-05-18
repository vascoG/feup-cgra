import {CGFobject} from '../lib/CGF.js';
import {MyAlga } from './MyAlga.js';


export class MyAlgaSet extends CGFobject {
	constructor(scene)
	{
		super(scene);
		this.number = Math.floor(Math.random()*10)+2;
		this.algas = [];
		for(let i=0;i<this.number;i++)
		{
			this.algas.push(new MyAlga(scene));
		}
		this.random1 = -50*Math.random()+25;
		this.random2 = -50*Math.random()+25;

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