import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { World } from "./threejs/world"
function App() {
  const [rendered,setRendered] = useState(true);
  const world = useRef(null);
  const threediv = useRef(null);
  const [windowRect,setWindowRect] = useState((state)=>[window.innerWidth,window.innerHeight]);
  //const aspectRatio = 1;

  function handleResize(world){
    setWindowRect((state)=>[window.innerWidth,window.innerHeight]);
    console.log(windowRect);
    console.log(`Width: ${window.innerWidth},Height: ${window.innerHeight}`)
    world.current.updateSize(threediv);
    world.current.render();
  }
  useEffect(()=>{if(rendered){
    world.current = (threediv)?new World(threediv):null;
    //this line is for rendering
    //(world.current)?world.current.render():console.log("s");
    (world.current)?world.current.start():console.log("not running");
    setRendered((state)=>false);
    console.log("hello")
  }},[])
  useEffect(()=>{
    
    if(threediv.current){
      window.addEventListener("resize",()=>{handleResize(world)})
    }
    
    return(()=>{window.removeEventListener("resize",()=>{handleResize(world)})})
  },[window.innerWidth,window.innerHeight])
  return (
    <>
    <div style={{width:`${windowRect[0]}px`,height:`${windowRect[1]}px`}} ref={threediv}></div>
    {/*WIDTH<input type="text" name="width" onChange={(e)=>{setWindowRect([Number(e.target.value),windowRect[1]])}}></input>
    HEIGHT<input type="text" name="height" onChange={(e)=>{setWindowRect([windowRect[0],Number(e.target.value)])}}></input>*/}
    </>
  )
}

export default App
