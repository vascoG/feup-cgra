import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import {CGFappearance} from '../lib/CGF.js';


/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
	super(scene);
    this.diamond = new MyDiamond(this.scene);
    this.triangleBig = new MyTriangleBig(this.scene);
    this.triangle = new MyTriangle(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangleSmall = new MyTriangleSmall(this.scene);


    this.green = new CGFappearance(this.scene);
    this.green.setAmbient(0, 0, 0, 1.0);
    this.green.setDiffuse(0, 1, 0, 1.0);
    this.green.setSpecular(1, 1, 1, 1.0);
    this.green.setShininess(10.0);

    this.red = new CGFappearance(this.scene);
    this.red.setAmbient(0, 0, 0, 1.0);
    this.red.setDiffuse(1, 0, 0, 1.0);
    this.red.setSpecular(1, 1, 1, 1.0);
    this.red.setShininess(10.0);
    
    this.blue = new CGFappearance(this.scene);
    this.blue.setAmbient(0, 0, 0, 1.0);
    this.blue.setDiffuse(0, 0, 1, 1.0);
    this.blue.setSpecular(1, 1, 1, 1.0);
    this.blue.setShininess(10.0);

    this.orange = new CGFappearance(this.scene);
    this.orange.setAmbient(0, 0, 0, 1.0);
    this.orange.setDiffuse(1, 0.5, 0, 1.0);
    this.orange.setSpecular(1, 1, 1, 1.0);
    this.orange.setShininess(10.0);

    this.pink = new CGFappearance(this.scene);
    this.pink.setAmbient(0, 0, 0, 1.0);
    this.pink.setDiffuse(0.95, 0.6, 0.7, 1.0);
    this.pink.setSpecular(1, 1, 1, 1.0);
    this.pink.setShininess(10.0);

    this.purple = new CGFappearance(this.scene);
    this.purple.setAmbient(0, 0, 0, 1.0);
    this.purple.setDiffuse(0.7, 0, 0.8, 1.0);
    this.purple.setSpecular(1, 1, 1, 1.0);
    this.purple.setShininess(10.0);

    this.yellow = new CGFappearance(this.scene);
    this.yellow.setAmbient(0, 0, 0, 1.0);
    this.yellow.setDiffuse(1, 1, 0, 1.0);
    this.yellow.setSpecular(1, 1, 1, 1.0);
    this.yellow.setShininess(10.0);
    }

    enableNormalViz(){
    this.diamond.enableNormalViz();
    this.triangle.enableNormalViz();
    this.triangleBig.enableNormalViz();
    this.triangleSmall.enableNormalViz();
    this.parallelogram.enableNormalViz();
    }
    disableNormalViz(){
    this.diamond.disableNormalViz();
    this.triangle.disableNormalViz();
    this.triangleBig.disableNormalViz();
    this.triangleSmall.disableNormalViz();
    this.parallelogram.disableNormalViz();
    }


	display(){
	var angle = Math.PI * -60 / 180;
    var mat = 
    [
    Math.cos(angle), Math.sin(angle), 0 , 0,
    -Math.sin(angle), Math.cos(angle), 0, 0,
    0 , 0, 1, 0, 
    0, 0 , 0, 1 
    ];
    var mat2 = 
    [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 2, 0, 1,
    ];
   this.scene.pushMatrix();
   this.scene.multMatrix(mat2);
   this.scene.multMatrix(mat);
   this.scene.customMaterial.apply();
   //this.green.apply();
   this.diamond.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.866,-0.5,0); // x:1*sen(-60) (vertice do diamond), y:-1*cos(-60)
   this.scene.rotate(-90*Math.PI/180,0,0,1);
   this.blue.apply();
   this.triangleBig.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(1.134,-2.5,0);//2+(-0.866)
   this.scene.rotate(90*Math.PI/180,0,0,1);  
   this.orange.apply();
   this.triangleBig.display();    
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(1.134,-4.5,0);
    this.pink.apply();
   this.triangle.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.866,1.5,0);
   this.scene.scale(-1,1,1);
   this.scene.rotate(-60*Math.PI/180,0,0,1);
   this.yellow.apply();
   this.parallelogram.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.68,3.8,0);
   this.scene.rotate(100*Math.PI/180,0,0,1);
   this.purple.apply();
   this.triangleSmall.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-1.4,2.2,0);
   this.scene.rotate(30*Math.PI/180,0,0,1);
   this.red.apply();
   this.triangleSmall.display();
   this.scene.popMatrix();
	}

}

