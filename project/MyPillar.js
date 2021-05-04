import {CGFobject} from '../lib/CGF.js';
import {MyCylinder} from './MyCylinder.js';
import {CGFappearance} from '../lib/CGF.js';

export class MyPillar extends CGFobject {
	constructor(scene){

		super(scene);
		this.pillarTexture = new CGFappearance(this.scene);
		this.pillarTexture.loadTexture("images/tronco.jpg");
		this.pillar = new MyCylinder(scene,15);
	}

	display()
	{
	this.scene.pushMatrix();
	this.pillarTexture.apply();
	this.scene.scale(0.5,10,0.5);
	this.pillar.display();
	this.scene.popMatrix();

	}



}