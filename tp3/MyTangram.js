import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
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
   this.diamond.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.866,-0.5,0); // x:1*sen(-60) (vertice do diamond), y:-1*cos(-60)
   this.scene.rotate(-90*Math.PI/180,0,0,1);
   this.triangleBig.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(1.134,-2.5,0);//2+(-0.866)
   this.scene.rotate(90*Math.PI/180,0,0,1);  
   this.triangleBig.display();    
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(1.134,-4.5,0);
   this.triangle.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.866,1.5,0);
   this.scene.scale(-1,1,1);
   this.scene.rotate(-60*Math.PI/180,0,0,1);
   this.parallelogram.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-0.68,3.8,0);
   this.scene.rotate(100*Math.PI/180,0,0,1);
   this.triangleSmall.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
   this.scene.translate(-1.4,2.2,0);
   this.scene.rotate(30*Math.PI/180,0,0,1);
   this.triangleSmall.display();
   this.scene.popMatrix();
	}

}

