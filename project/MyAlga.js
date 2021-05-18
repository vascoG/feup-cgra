import {CGFobject} from '../lib/CGF.js';
import {MyPyramid} from './MyPyramid.js';
import {CGFappearance} from '../lib/CGF.js';

export class MyAlga extends CGFobject {

constructor(scene)
{
	super(scene);
	this.alga = new MyPyramid(this.scene,5,5);
	this.algaTexture = new CGFappearance(this.scene);
	this.random = Math.random()*0.5;
	this.algaTexture.setColor(this.random,this.random+0.5,this.random,1);
	this.random1 = Math.random()*0.1+0.05;
	this.random2 = Math.random()*0.2+0.1;
	this.random3 = Math.random()+1;

}

display()
{
	this.scene.pushMatrix();
	this.algaTexture.apply();
	this.scene.scale(this.random1,this.random3,this.random2);
	this.alga.display();
	this.scene.popMatrix();

}


}