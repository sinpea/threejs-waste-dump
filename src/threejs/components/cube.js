import {BoxGeometry, MathUtils, Mesh, MeshStandardMaterial} from 'three';

function createCube(){
    const geometry = new BoxGeometry(2,2,2);
    const material = new MeshStandardMaterial({color:"purple"});
    const cube = new Mesh(geometry,material);
    const rotationSpeed = MathUtils.degToRad(30);
    cube.rotation.set(-0.5,-0.1,0.8);

    cube.tick = (delta)=>{
        cube.rotation.x += rotationSpeed * delta;
        cube.rotation.y += rotationSpeed * delta;
        cube.rotation.z += rotationSpeed * delta;
    }
    return cube;
}

export {createCube};