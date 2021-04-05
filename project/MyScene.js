import { CGFscene, CGFcamera, CGFaxis, CGFappearance } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";
import { MyMovingObject } from "./MyMovingObject.js";
import {MyCubeMap} from "./MyCubeMap.js";

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }

    checkKeys(){
        var text ="Keys pressed: ";
        var keysPressed=false;
         // Check for key codes e.g. in https://keycode.info/
         if(this.gui.isKeyPressed("KeyW")){
             this.mymovingobject.accelerate(0.1);
             text+=" W ";
             keysPressed=true;
         }
         if(this.gui.isKeyPressed("KeyS")){
            this.mymovingobject.accelerate(-0.1);
            text+=" S ";
            keysPressed=true;
        }
        if(this.gui.isKeyPressed("KeyA")){
            this.mymovingobject.turn(10);
            text+=" A ";
            keysPressed=true;
        }
        if(this.gui.isKeyPressed("KeyD")){
           this.mymovingobject.turn(-10);
           text+=" D ";
           keysPressed=true;
       }
       if(this.gui.isKeyPressed("KeyR")){
        this.mymovingobject.reset();
        text+=" R ";
        keysPressed=true;
    }
        if(keysPressed)
            console.log(text);
        
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

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.mymovingobject = new MyMovingObject(this);
        this.mycubemap1 = new MyCubeMap(this,'images/demo_cubemap/top.png','images/demo_cubemap/bottom.png','images/demo_cubemap/left.png','images/demo_cubemap/right.png','images/demo_cubemap/front.png','images/demo_cubemap/back.png');
        this.mycubemap = new MyCubeMap(this,'images/new/top.png','images/new/bottom.png','images/new/left.png','images/new/right.png','images/new/front.png','images/new/back.png');

        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0,0,0,1);
		this.defaultAppearance.setShininess(120);

		this.sphereAppearance = new CGFappearance(this);
		this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.sphereAppearance.setShininess(120);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayMars = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
        this.checkKeys();
        this.mymovingobject.update();
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
        
        
        this.defaultAppearance.apply();
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.sphereAppearance.apply();
        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        //this.translate(this.mymovingobject.x,this.mymovingobject.y,this.mymovingobject.z);
        //this.mymovingobject.display();
        //this.popMatrix();
        this.translate(this.camera.position[0],this.camera.position[1],this.camera.position[2]);
        this.scale(50,50,50);
        if(this.displayMars)
        this.mycubemap.display();
        else 
        this.mycubemap1.display();
        this.popMatrix();
        //This sphere does not have defined texture coordinates
        // this.incompleteSphere.display();
        // ---- END Primitive drawing section
    }
}