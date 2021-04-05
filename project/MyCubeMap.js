import {CGFobject, CGFtexture, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
	constructor(scene, t1, t2,t3, t4, t5, t6) {
		super(scene);
    this.quad = new MyQuad (this.scene);


    this.top = new CGFappearance(this.scene);
    this.top.setAmbient(0, 0, 0, 0);
    this.top.setDiffuse(0, 0, 0, 0);
    this.top.setSpecular(0, 0, 0, 0);
    this.top.setEmission(1,1,1,1);
    this.top.loadTexture(t1);
    this.top.setTextureWrap('REPEAT', 'REPEAT');

    this.bottom = new CGFappearance(this.scene);
    this.bottom.setAmbient(0, 0, 0, 0);
    this.bottom.setDiffuse(0, 0, 0, 0);
    this.bottom.setSpecular(0, 0, 0, 0);
    this.bottom.setEmission(1,1,1,1);
    this.bottom.loadTexture(t2);
    this.bottom.setTextureWrap('REPEAT', 'REPEAT');

    this.left = new CGFappearance(this.scene);
    this.left.setAmbient(0, 0, 0, 0);
    this.left.setDiffuse(0, 0, 0, 0);
    this.left.setSpecular(0, 0, 0, 0);
    this.left.setEmission(1,1,1,1);
    this.left.loadTexture(t3);
    this.left.setTextureWrap('REPEAT', 'REPEAT');

    this.right = new CGFappearance(this.scene);
    this.right.setAmbient(0, 0, 0, 0);
    this.right.setDiffuse(0, 0, 0, 0);
    this.right.setSpecular(0, 0, 0, 0);
    this.right.setEmission(1,1,1,1);
    this.right.loadTexture(t4);
    this.right.setTextureWrap('REPEAT', 'REPEAT');

    this.front = new CGFappearance(this.scene);
    this.front.setAmbient(0, 0, 0, 0);
    this.front.setDiffuse(0, 0, 0, 0);
    this.front.setSpecular(0, 0, 0, 0);
    this.front.setEmission(1,1,1,1);
    this.front.loadTexture(t5);
    this.front.setTextureWrap('REPEAT', 'REPEAT');

    this.back = new CGFappearance(this.scene);
    this.back.setAmbient(0, 0, 0, 0);
    this.back.setDiffuse(0, 0, 0, 0);
    this.back.setSpecular(0, 0, 0, 0);
    this.back.setEmission(1,1,1,1);
    this.back.loadTexture(t6);
    this.back.setTextureWrap('REPEAT', 'REPEAT');
  

	}
	display(){

   this.front.apply();
   this.scene.pushMatrix();
   this.scene.translate(0,0,-0.5);
   this.quad.display();    
   this.scene.popMatrix();
   this.back.apply();
   this.scene.pushMatrix();
   this.scene.translate(0,0,0.5);
   this.scene.rotate(Math.PI,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.left.apply();
   this.scene.pushMatrix();
   this.scene.translate(-0.5,0,0);
   this.scene.rotate(90*Math.PI/180,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.right.apply();
   this.scene.pushMatrix();
   this.scene.translate(0.5,0,0);
   this.scene.rotate(-90*Math.PI/180,0,1,0);
   this.quad.display();
   this.scene.popMatrix();
   this.top.apply();
   this.scene.pushMatrix();
   this.scene.translate(0,0.5,0);
   this.scene.rotate(90*Math.PI/180,1,0,0);
   this.quad.display();
   this.scene.popMatrix();
   this.bottom.apply();
   this.scene.pushMatrix();
   this.scene.translate(0,-0.5,0);
   this.scene.rotate(-90*Math.PI/180,1,0,0);

   this.quad.display();
   this.scene.popMatrix();
   }

}

