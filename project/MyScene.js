import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture, CGFshader  } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";
import { MyMovingObject } from "./MyMovingObject.js";
import {MyCubeMap} from "./MyCubeMap.js";
import { MyCylinder } from "./MyCylinder.js";
import {MyFish} from "./MyFish.js";
import { MySeaFloor } from "./MySeaFloor.js";
import {MyQuad} from "./MyQuad.js";
import {MyRock} from "./MyRock.js";
import {MyRockSet} from "./MyRockSet.js";
import {MyPillar} from "./MyPillar.js";
import {MyAlga} from "./MyAlga.js";
import {MyAlgaSet} from "./MyAlgaSet.js";
import {MyMovingFish} from "./MyMovingFish.js";
import {MyAnimatedFish} from "./MyAnimatedFish.js";
import {CGFcamera2} from "./CGFcamera2.js";
import {MyVegetacao} from "./MyVegetacao.js";

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
             this.mymovingfish.accelerate(0.05*this.speedFactor);
             text+=" W ";
             keysPressed=true;
         }
         if(this.gui.isKeyPressed("KeyS")){
            this.mymovingfish.accelerate(-0.05*this.speedFactor);
            text+=" S ";
            keysPressed=true;
        }
        if(this.gui.isKeyPressed("KeyA")){
            this.mymovingfish.turn(5);
            text+=" A ";
            this.mymovingfish.rotateLeft();
            keysPressed=true;
        }
        if(this.gui.isKeyPressed("KeyD")){
           this.mymovingfish.turn(-5);
           text+=" D ";
           this.mymovingfish.rotateRight();
           keysPressed=true;
       }
       if(this.gui.isKeyPressed("KeyR")){
        this.mymovingfish.reset();
        text+=" R ";
        keysPressed=true;
    }
      if(this.gui.isKeyPressed("KeyP")){
        this.mymovingfish.up=true;
        this.mymovingfish.down=false;
        text+=" P ";
        keysPressed=true;
    }
    if(this.gui.isKeyPressed("KeyL")){
        this.mymovingfish.down=true;
        this.mymovingfish.up=false;
        text+=" L ";
        keysPressed=true;
    }
        if(this.gui.isKeyPressed("KeyC")){
        this.updateRock();
        text+=" C ";
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
        this.mycylinder = new MyCylinder(this,20);
        this.mymovingfish = new MyMovingFish(this);
        this.objects = [this.mycubemap, this.mycubemap1];
        this.myseafloor = new MySeaFloor (this);
        this.watercubemap = new MyCubeMap(this,'images/underwater_cubemap/top.jpg','images/underwater_cubemap/bottom.jpg','images/underwater_cubemap/left.jpg','images/underwater_cubemap/right.jpg','images/underwater_cubemap/front.jpg','images/underwater_cubemap/back.jpg')
        this.quad = new MyQuad(this);
        this.rock = new MyRock(this,15,15);
        this.rockset = new MyRockSet(this,25);
        this.pillar1 = new MyPillar(this);
        this.pillar2 = new MyPillar(this);
        this.pillar3 = new MyPillar(this);
        this.pillar4 = new MyPillar(this);
        this.algas = new MyVegetacao(this,30);

        this.myanimatedfish = new MyAnimatedFish(this,0.25,0.7,0.65,0.3,0,0,10);
        this.myanimatedfish2 = new MyAnimatedFish(this,1,0.65,0,0.3,-10,-12,5);

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
        this.sphereAppearance.loadTexture('images/earth.jpg');
        this.sphereAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.rockTexture = new CGFappearance(this);
		//this.rockTexture.loadTexture("images/rockTexture.jpg");

        this.distorcionTexture = new CGFtexture(this, "images/distortionmap.png");
        this.quadTexture = new CGFtexture(this, "images/pier.jpg");
        this.quadShader = new CGFshader(this.gl, "shaders/distorcion.vert","shaders/distorcion.frag");
	    this.quadShader.setUniformsValues({ uSampler1: 3 });
	    this.quadShader.setUniformsValues({ uSampler2: 4 });

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayMovingObject = true;
        this.displayMars = false;
        this.displayDefault = true;
        this.displayCylinder = false;
        this.displaySphere = false;
        this.scaleFactor = 2.0;
        this.speedFactor = 1.0;
        this.selectedTexture = 0;

        this.textureIds = { 'Mars': 0, 'Default': 1};
      

    }
    
     updateObjectComplexity(){
        this.objects[this.selectedTexture].updateBuffers(this.objectComplexity);
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera2(1.7, 0.1, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
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
        this.mymovingfish.update(t);
        this.myanimatedfish.update(t);
        this.myanimatedfish2.update(t);
        this.quadShader.setUniformsValues({ timeFactor: t / 100 % 100 });
    }

    updateRock(){
		if(!this.mymovingfish.caughtRock)
			this.catchRock();
	    else
			this.dropRock();

	}

	catchRock(){
    let minDistance = 1.5;

        if(!(this.mymovingfish.myfish.y>1))
        {
            for(let i=0;i<this.rockset.number;i++)
            {
                let distance = Math.sqrt((this.mymovingfish.x-this.rockset.rocks[i].x)*(this.mymovingfish.x-this.rockset.rocks[i].x)+(this.mymovingfish.z-this.rockset.rocks[i].z)*(this.mymovingfish.z-this.rockset.rocks[i].z));
                        if(distance<=minDistance)
                        {   this.mymovingfish.caughtRock = true;
                            minDistance = distance;
                            this.mymovingfish.rock = this.rockset.rocks[i];
                        }

            }
        }

	}

	dropRock(){
    if(!(this.mymovingfish.myfish.y>1))
    {
        let distance = Math.sqrt((this.mymovingfish.x-this.myseafloor.nestX)*(this.mymovingfish.x-this.myseafloor.nestX)+(this.mymovingfish.z-this.myseafloor.nestZ)*(this.mymovingfish.z-this.myseafloor.nestZ));
        if(distance <= this.myseafloor.nestRadius)
            {
                this.mymovingfish.caughtRock = false;
                this.mymovingfish.rock.x = this.mymovingfish.rock.nestX
                this.mymovingfish.rock.z = this.mymovingfish.rock.nestZ;
                this.mymovingfish.rock.y = -0.5;
            }
    }
    else if(this.mymovingfish.myfish.y>=4)
    {   let distance = Math.sqrt((this.mymovingfish.x-this.myseafloor.nestX)*(this.mymovingfish.x-this.myseafloor.nestX)+(this.mymovingfish.z-this.myseafloor.nestZ)*(this.mymovingfish.z-this.myseafloor.nestZ));
        if(distance <= this.myseafloor.nestRadius+5)
        {
        this.mymovingfish.rock.falling = true;
        this.mymovingfish.rock.incrementX = (this.mymovingfish.rock.nestX - this.mymovingfish.rock.x )/40;
        this.mymovingfish.rock.incrementY = (-0.5 - this.mymovingfish.rock.y )/40;
        this.mymovingfish.rock.incrementZ = (this.mymovingfish.rock.nestZ - this.mymovingfish.rock.z )/40;
        }
    }


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

        this.quadTexture.bind(3);
        this.distorcionTexture.bind(4);

        // ---- BEGIN Primitive drawing section
        
        this.pushMatrix();
        this.mymovingfish.display();
        this.popMatrix();
        this.pushMatrix();
        this.myanimatedfish.display();
        this.popMatrix();
        this.pushMatrix();
        this.myanimatedfish2.display();
        this.popMatrix();
        this.pushMatrix();
        this.myseafloor.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(this.camera.position[0],this.camera.position[1],this.camera.position[2]);
        this.scale(500,500,500);
        this.watercubemap.display();
        this.popMatrix();
        this.pushMatrix();
        this.setActiveShader(this.quadShader);
        this.translate(0,10,0);
        this.scale(500,500,500);
        this.rotate(Math.PI/2,1,0,0);
        this.quad.display();
        this.popMatrix();
        this.setActiveShader(this.defaultShader);
        this.pushMatrix();
        this.rockTexture.apply();
        this.rockset.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-1,0,0);
        this.pillar1.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-10,0,0);
        this.pillar2.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(0,0,-12);
        this.pillar3.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(0,0,-19);
        this.pillar4.display();
        this.popMatrix();
        this.pushMatrix();
        this.algas.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}
