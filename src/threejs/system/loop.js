import {Clock} from "three";
const clock = new Clock();

class Loop{
    camera;
    scene;
    renderer;
    updatables;
    constructor(camera,scene,renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];//this is the list of animatable objects
    }

    start(){
        this.renderer.setAnimationLoop(()=>{
            //move everything fwd by a frame (execute every animatable object's tick method)
            this.tick();

            //render frame
            this.renderer.render(this.scene,this.camera)
        })
    }
    stop(){
        this.renderer.setAnimationLoop(null);
    }

    tick(){
        const delta = clock.getDelta();
        //loop thru updatables (animatanle) list and execute each tick (physics calc) method
        for(const object of this.updatables){
            object.tick(delta);
        }
    }
}

export {Loop}