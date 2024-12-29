import { useState } from "react"
import Friends from "./Components/Friends"

function Main1(){
  const data = [{name:"John" , profession:"Creator",img:"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" ,friends:false},{name:"Mike" , profession:"Footballer",img:"https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},{name:"Lin" , profession:"Gymnast",img:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},{name:"Kevin" , profession:"Soccer Player",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",friends:false}]

const [values,setValues] = useState(data)
function handleClick(cindex){
  setValues((prev)=>(prev.map((item,index)=>{
    if(index===cindex)
      return {...item,friends:!item.friends}
    else
    return item
  })))
}
return(<><div className="w-full h-screen bg-zinc-800 flex justify-center items-center gap-4">
  {values.map((item,index) => <Friends key={index} value={item} handleClick={handleClick} index={index} />)} 
   </div></>)
}
export default Main1