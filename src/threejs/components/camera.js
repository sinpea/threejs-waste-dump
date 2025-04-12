import {PerspectiveCamera} from 'three'

class Camera{
    fov;
    aspect_ratio;
    nearClippingPane;
    farClippingPane;
    perspCam;
    constructor(f = 35,ar = 1,nrcp = 0.1,frcp = 100){
        this.fov = f;
        this.aspect_ratio = ar;
        this.nearClippingPane = nrcp;
        this.farClippingPane = frcp;
        this.perspCam = this.createCamera();
    }

    createCamera(){
        const camera = new PerspectiveCamera(this.fov,this.aspect_ratio,this.nearClippingPane,this.farClippingPane);
        return camera;
    }
}

export {Camera};