import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyMovingObject extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.velocity=0;
		this.angle=0;
		this.x=0;
		this.y=0;
		this.z=0;
	}
	update(){
		this.x+=this.velocity*Math.sin(this.angle*Math.PI/180);
		this.z+=this.velocity*Math.cos(this.angle*Math.PI/180);
		
	}
	turn(val){
		this.angle+=val;
	}
	accelerate(val){
		this.velocity+=val;
	}
	reset(){
		this.velocity=0;
		this.angle=0;
		this.x=0;
		this.y=0;
		this.z=0;
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0.5,	//0
			-0.5, 0, -0.5,	//1
			0.5, 0, -0.5,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

