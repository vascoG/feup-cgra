import { CGFscene, CGFcamera, CGFaxis } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.diamond = new MyDiamond(this);
    this.triangleBig = new MyTriangleBig(this);
    this.triangle = new MyTriangle(this);
    this.parallelogram = new MyParallelogram(this);
    this.triangleSmall = new MyTriangleSmall(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }
  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();
  
    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);

    // ---- BEGIN Primitive drawing section
    
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
    this.pushMatrix();
    this.multMatrix(mat2);
    this.multMatrix(mat);

   this.diamond.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(-0.866,-0.5,0); // x:1*sen(-60) (vertice do diamond), y:-1*cos(-60)
   this.rotate(-90*Math.PI/180,0,0,1);
   this.triangleBig.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(1.134,-2.5,0);//2+(-0.866)
   this.rotate(90*Math.PI/180,0,0,1);
   this.triangleBig.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(1.134,-4.5,0);
   this.triangle.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(-0.866,1.5,0);
   this.scale(-1,1,1);
   this.rotate(-60*Math.PI/180,0,0,1);
   this.parallelogram.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(-0.68,3.8,0);
   this.rotate(100*Math.PI/180,0,0,1);
   this.triangleSmall.display();
   this.popMatrix();
   this.pushMatrix();
   this.translate(-1.4,2.2,0);
   this.rotate(30*Math.PI/180,0,0,1);
   this.triangleSmall.display();
   this.popMatrix();
    // ---- END Primitive drawing section
  }
}
