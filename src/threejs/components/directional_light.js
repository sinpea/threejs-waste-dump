import { DirectionalLight } from "three";

function createDirectionalLight(){
    const light = new DirectionalLight('white',8);

    return light;
}

export {createDirectionalLight}