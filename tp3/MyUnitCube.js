import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
		-0.5,-0.5,-0.5,	//0
         0.5,-0.5,-0.5,	//1
         0.5,-0.5,0.5,	//2
		-0.5,-0.5,0.5,  //3
        -0.5,0.5,-0.5,	//4
         0.5,0.5,-0.5,	//5
         0.5,0.5,0.5,	//6
        -0.5,0.5,0.5,   //7
    	-0.5,-0.5,-0.5,	//0
         0.5,-0.5,-0.5,	//1
         0.5,-0.5,0.5,	//2
		-0.5,-0.5,0.5,  //3
        -0.5,0.5,-0.5,	//4
         0.5,0.5,-0.5,	//5
         0.5,0.5,0.5,	//6
        -0.5,0.5,0.5,   //7
    	-0.5,-0.5,-0.5,	//0
         0.5,-0.5,-0.5,	//1
         0.5,-0.5,0.5,	//2
		-0.5,-0.5,0.5,  //3
        -0.5,0.5,-0.5,	//4
         0.5,0.5,-0.5,	//5
         0.5,0.5,0.5,	//6
        -0.5,0.5,0.5,   //7
		];

		this.normals = [
		 -1, 0, 0,	//0
         1, 0, 0,	//1
         1, 0, 0,	//2
		 -1, 0, 0,  //3
         -1, 0, 0,	//4
         1, 0, 0,	//5
         1, 0, 0,	//6
         -1, 0, 0,   //7
		 0,-1,0,	//0
         0, -1, 0,	//1
         0, -1, 0,	//2
		 0, -1, 0,  //3
         0, 1, 0,	//4
         0, 1, 0,	//5
         0, 1, 0,	//6
         0, 1, 0,   //7
    	 0,0,-1,	//0
         0, 0, -1,	//1
         0, 0, 1,	//2
		 0, 0, 1,  //3
         0, 0, -1,	//4
         0, 0, -1,	//5
         0, 0, 1,	//6
         0, 0, 1,   //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0,1,2,
			2,3,0,
            4,7,6,
            6,5,4,
            10,9,13,
            13,14,10,
            11,15,12,
            12,8,11,
            19,18,22,
            22,23,19,
            16,20,21,
            21,17,16,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

