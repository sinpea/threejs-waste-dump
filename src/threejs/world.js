import { Resizer} from "./system/resizer";

import { Camera } from "./components/camera";
import { createCube } from "./components/cube";
import { createRenderer } from "./components/renderer";
import { createScene } from "./components/scene";
import { createDirectionalLight } from "./components/directional_light";
import { MathUtils } from "three/src/Three.Core.js";



class World{
    camera;scene;renderer;resize;contain;Cam;
    constructor(container){
        this.Cam = new Camera();
        this.camera = this.Cam.perspCam;
        this.scene = createScene();
        this.renderer = createRenderer();
        container.current.appendChild(this.renderer.domElement);

        const cube = createCube();

        cube.scale.set(2,1,0.5);
        cube.position.set(0,0,-10);
        cube.rotation.set(MathUtils.degToRad(110),MathUtils.degToRad(45),MathUtils.degToRad(45))
        const light = createDirectionalLight();
        this.resize = new Resizer(container,this.camera,this.renderer);
        
        
        this.camera.position.setX(0);
        this.camera.position.setY(0);
        this.camera.position.setZ(10);
        
        light.position.set(10,10,10);

        this.scene.add(cube,light);
        this.contain = container;
    }

    render(container){
        console.log(`In method render -> Cam AR = ${this.camera.aspect}\n-> Container details = ${container.current.getBoundingClientRect().width}`)
        this.renderer.render(this.scene,this.camera);
    }

    updateCamera(){
        this.camera.updateProjectionMatrix();
    }

    updateSize(container){
        this.resize.sizeSetter(container,this.camera,this.renderer);
        console.log(`CAM AR = ${this.camera.aspect}`)
        this.render(container);
    }
}

export {World};