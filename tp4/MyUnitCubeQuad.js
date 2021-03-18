import {CGFobject, CGFtexture, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, t1, t2,t3) {
		super(scene);
    this.quad = new MyQuad (this.scene);


    this.app1 = new CGFappearance(this.scene);
    this.app1.setAmbient(0.1, 0.1, 0.1, 1);
    this.app1.setDiffuse(0.9, 0.9, 0.9, 1);
    this.app1.setSpecular(0.1, 0.1, 0.1, 1);
    this.app1.setShininess(10.0);
    this.app1.loadTexture(t1);
    this.app1.setTextureWrap('REPEAT', 'REPEAT');

    this.app2 = new CGFappearance(this.scene);
    this.app2.setAmbient(0.1, 0.1, 0.1, 1);
    this.app2.setDiffuse(0.9, 0.9, 0.9, 1);
    this.app2.setSpecular(0.1, 0.1, 0.1, 1);
    this.app2.setShininess(10.0);
    this.app2.loadTexture(t2);
    this.app2.setTextureWrap('REPEAT', 'REPEAT');

    this.app3 = new CGFappearance(this.scene);
    this.app3.setAmbient(0.1, 0.1, 0.1, 1);
    this.app3.setDiffuse(0.9, 0.9, 0.9, 1);
    this.app3.setSpecular(0.1, 0.1, 0.1, 1);
    this.app3.setShininess(10.0);
    this.app3.loadTexture(t3);
    this.app3.setTextureWrap('REPEAT', 'REPEAT');
  

	}
	display(){

   this.app2.apply();
   this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
   this.scene.pushMatrix();
   this.scene.translate(0,0,0.5);
   this.quad.display();    
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(0,0,-0.5);
   this.scene.rotate(Math.PI,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(0.5,0,0);
   this.scene.rotate(90*Math.PI/180,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.5,0,0);
   this.scene.rotate(-90*Math.PI/180,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(0,-0.5,0);
   this.scene.rotate(90*Math.PI/180,1,0,0);
   this.app3.apply();
   this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

   this.quad.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(0,0.5,0);
   this.scene.rotate(-90*Math.PI/180,1,0,0);
   this.app1.apply();
   this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

   this.quad.display();
   this.scene.popMatrix();
   }

}

