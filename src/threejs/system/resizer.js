const setSize=(container,camera,renderer)=>{
        camera.aspect = 1/(container.current.getBoundingClientRect().height/container.current.getBoundingClientRect().width);
        camera.updateProjectionMatrix();
        console.log("SIZE CHANGE");
        renderer.setSize(container.current.getBoundingClientRect().width,container.current.getBoundingClientRect().height);
        renderer.setPixelRatio(window.devicePixelRatio);
}
class Resizer {
    
    constructor(container,camera,renderer) 
    {
        setSize(container,camera,renderer);
    }

    sizeSetter(container,camera,renderer){
        setSize(container,camera,renderer)
    }
  }
  
export { Resizer };