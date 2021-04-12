import {CGFobject} from '../lib/CGF.js';
/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
	constructor(scene,slices) {
		super(scene);
        this.slices=slices;
        if(this.slices<3) this.slices=3; //minimum slices
		this.initBuffers();
	}
	
	initBuffers() {

        this.angle = 2*Math.PI/this.slices;
        this.interval = 1/this.slices;
        this.vertices = []; 
        this.indices = []; 
        this.texCoords = []; 
        this.normals = [];

        for(var i=0;i<=this.slices;i++){
            //bottom 
            this.vertices.push(Math.cos(i*this.angle),1,Math.sin(this.angle*i));  
            this.normals.push(Math.cos(i*this.angle),0,Math.sin(this.angle*i));
            this.texCoords.push(i*this.interval, 0); 
            //top
            this.vertices.push(Math.cos(i*this.angle),0,Math.sin(this.angle*i));    
            this.normals.push(Math.cos(i*this.angle),0,Math.sin(this.angle*i));
            this.texCoords.push(i*this.interval, 1); 
            
            if (i>0){                
                this.indices.push((i-1)*2,i*2,i*2-1);
                this.indices.push(i*2, i*2+1, i*2-1);

            }
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}