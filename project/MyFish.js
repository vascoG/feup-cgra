import {CGFobject} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import {CGFshader } from '../lib/CGF.js';
import {CGFappearance} from '../lib/CGF.js';
import {MyTriangle} from "./MyTriangle.js";
/**
 * MyFish
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFish extends CGFobject {
	constructor(scene, r, g, b, ratio) {
		super(scene);
		this.x = 0;
		this.y = 4;
		this.z = 0;
        this.angleTail = 0;
		this.angleFin = 0;
		this.rotateright=false;
		this.rotateleft=false;
		this.body = new MySphere(this.scene, 16, 8);
		this.bodyTexture = new CGFappearance(this.scene);
		this.bodyTexture.loadTexture("images/fish_texture.jpg");

		this.finTexture = new CGFappearance(this.scene);
		this.finTexture.setColor(r,g,b,1);

		this.bodyShader = new CGFshader(this.scene.gl, "shaders/varying.vert", "shaders/varying.frag");
		this.bodyShader.setUniformsValues({red:r});
		this.bodyShader.setUniformsValues({green:g});
		this.bodyShader.setUniformsValues({blue:b});
		this.bodyShader.setUniformsValues({headRatio:ratio});

		this.leftFin = new MyTriangle(this.scene);
		this.rightFin = new MyTriangle(this.scene);
		this.topFin = new MyTriangle(this.scene);
		this.tail = new MyTriangle(this.scene);

		this.eye = new MySphere(this.scene, 16, 8);
		this.eyeTexture = new CGFappearance(this.scene);
		this.eyeTexture.loadTexture("images/eye.png");
 
	}


	updateTailAngle(t,v){
		t=t/100;
		if(v!=0)
			t=t*(Math.abs(v)+1); 
		this.angleTail=20*Math.sin(t);
	}
	updateFinAngle(t){
		t=t/200; 
		this.angleFin=20*Math.sin(t);
	}
	display()
	{
	this.scene.pushMatrix();
	this.bodyTexture.apply();
	this.scene.setActiveShader(this.bodyShader);
	this.scene.scale(0.15,0.2,0.25);
	this.body.display();
	this.scene.setActiveShader(this.scene.defaultShader);
	this.scene.popMatrix();

	this.scene.pushMatrix();
	if(!this.rotateleft)
		this.scene.rotate(this.angleFin*Math.PI/180,0,0,1);
	this.scene.translate(0.175,-0.1,-0.1);
	this.scene.scale(0.1,0.1,0.1);
	this.scene.rotate(Math.PI/8,0,0,1);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.leftFin.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
    if(!this.rotateright)
		this.scene.rotate(-this.angleFin*Math.PI/180,0,0,1);
	this.scene.translate(-0.175,-0.1,-0.1);
	this.scene.scale(0.1,0.1,0.1);
	this.scene.rotate(-Math.PI/8,0,0,1);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.rightFin.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0.25,0);
	this.scene.scale(0.1,0.1,0.1);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.topFin.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(this.angleTail*Math.PI/180,0,1,0);
	this.scene.translate(0,0,-0.45);
	this.scene.scale(0.15,0.15,0.15);
	this.scene.rotate(-Math.PI/4,1,0,0);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.tail.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(0.12,0.05,0.12);
	this.scene.scale(0.05,0.05,0.05);
	this.scene.rotate(90*Math.PI/180,0,1,0);
	this.eyeTexture.apply();
	this.eye.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.12,0.05,0.12);
	this.scene.scale(0.05,0.05,0.05);
	this.scene.rotate(90*Math.PI/180,0,1,0);
	this.eyeTexture.apply();
	this.eye.display();
	this.scene.popMatrix();
	
	this.rotateright=false;
	this.rotateleft=false;
	}
}