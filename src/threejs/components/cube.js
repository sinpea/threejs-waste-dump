import {BoxGeometry, Mesh, MeshStandardMaterial} from 'three';

function createCube(){
    const geometry = new BoxGeometry(2,2,2);
    const material = new MeshStandardMaterial({color:"purple"});
    const cube = new Mesh(geometry,material);
    cube.rotation.set(-0.5,-0.1,0.8);

    cube.tick = ()=>{
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    }
    return cube;
}

export {createCube};