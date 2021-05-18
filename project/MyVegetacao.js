import {CGFobject} from '../lib/CGF.js';
import {MyAlgaSet } from './MyAlgaSet.js';


export class MyVegetacao extends CGFobject {
	constructor(scene,number)
	{
		super(scene);
		this.number = number;
		this.algas = [];
		for(let i=0;i<this.number;i++)
		{
			this.algas.push(new MyAlgaSet(scene));
		}
	}

	display()
	{

	for(let i=0;i<this.number;i++)
		{	
			this.scene.pushMatrix();
			this.scene.translate(this.algas[i].random1,0,this.algas[i].random2);
			this.algas[i].display();
			this.scene.popMatrix();
		}

	}

}