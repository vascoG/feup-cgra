import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
    this.quad = new MyQuad (this.scene);
	}
	display(){

   this.quad.display();    
   this.scene.pushMatrix();
   this.scene.rotate(Math.PI,0,0,1);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.rotate(90*Math.PI/180,0,0,1);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.rotate(-90*Math.PI/180,0,0,1);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.rotate(90*Math.PI/180,1,0,0);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.rotate(-90*Math.PI/180,1,0,0);
   this.quad.display();
   this.scene.popMatrix();
	}

}

