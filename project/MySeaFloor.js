import {CGFobject, CGFtexture, CGFshader} from '../lib/CGF.js';
import {MyPlane} from './MyPlane.js';
/**
 * MySeaFloor
 * @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param minS - minimum texture coordinate in S
 * @param maxS - maximum texture coordinate in S
 * @param minT - minimum texture coordinate in T
 * @param maxT - maximum texture coordinate in T
 */
export class MySeaFloor extends CGFobject {
	constructor(scene) {
		super(scene);

	this.sand = new CGFtexture(this.scene, "images/sand.png");
	this.sandMap = new CGFtexture(this.scene, "images/sandMap (1).png");


	this.sandShader = new CGFshader(this.scene.gl, "shaders/sand.vert", "shaders/sand.frag");

	this.sandShader.setUniformsValues({ uSampler1: 1 });
	this.sandShader.setUniformsValues({ uSampler2: 2 });

	this.plane = new MyPlane(this.scene,20,0,1,0,1);

	this.nestRadius = 5;
	this.nestX = 0.70*25;
	this.nestZ = 0.75*25;
	
	}
	display(){
		this.scene.setActiveShader(this.sandShader);
		this.scene.pushMatrix();
		this.sand.bind(1);
        this.sandMap.bind(2);
		this.scene.rotate(-Math.PI*90/180,1,0,0);
		this.scene.scale(50,50,50);
		this.plane.display();
		this.scene.popMatrix();
		this.scene.setActiveShader(this.scene.defaultShader);
	}

	
	
}	