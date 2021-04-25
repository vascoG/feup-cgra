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
		this.y = 3;
		this.z = 0;
        
		this.body = new MySphere(this.scene, 16, 8);
		this.bodyTexture = new CGFappearance(this.scene);
		this.bodyTexture.loadTexture("images/fish_texture.jpg");

		this.finTexture = new CGFappearance(this.scene);
		this.finTexture.setColor(r,g,b,1);

		this.bodyShader = new CGFshader(this.scene.gl, "varying.vert", "varying.frag");
		this.bodyShader.setUniformsValues({red:r});
		this.bodyShader.setUniformsValues({green:g});
		this.bodyShader.setUniformsValues({blue:b});
		this.bodyShader.setUniformsValues({headRatio:ratio});

		this.leftFin = new MyTriangle(this.scene);
		this.rightFin = new MyTriangle(this.scene);
		this.topFin = new MyTriangle(this.scene);
		this.tail = new MyTriangle(this.scene);

	}
	
	display()
	{
	this.scene.pushMatrix();
	this.bodyTexture.apply();
	this.scene.setActiveShader(this.bodyShader);
	this.scene.scale(0.3,0.4,0.5);
	this.body.display();
	this.scene.setActiveShader(this.scene.defaultShader);
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0.35,-0.1,-0.1);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(Math.PI/8,0,0,1);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.leftFin.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(-0.35,-0.1,-0.1);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/8,0,0,1);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.rightFin.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0.5,0);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.topFin.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.9);
	this.scene.scale(0.3,0.3,0.3);
	this.scene.rotate(-Math.PI/4,1,0,0);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.finTexture.apply();
	this.topFin.display();
	this.scene.popMatrix();

	}
}