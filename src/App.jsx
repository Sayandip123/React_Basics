import { useRef } from "react"
import Cards from "./Components/Cards"
import { useState } from "react"

function App(){
  const [users,setUsers] = useState([])
const name = useRef(null)
const task = useRef(null)
const img = useRef(null)
const handlesubmit = (e)=> {
  e.preventDefault()
  setUsers([...users,{name:name.current.value,task:task.current.value,img:img.current.value}])
}
function Remove(id){
setUsers(()=> users.filter((item,index)=>id!=index))
}
return(<> 
<div className="bg-slate-300 h-screen w-full ">
  <div className="flex-col justify-self-center pt-28 h-screen">  <Cards users={users} Remove={Remove} /> 
  <form action="" onSubmit={handlesubmit}>
    <input className="m-2 rounded-lg outline-none p-2 font-semibold" ref={name} type="text" placeholder="Name"/>
    <input className="m-2 rounded-lg outline-none p-2 font-semibold" ref={task} type="text" placeholder="Tasl" />
    <input className="m-2 rounded-lg outline-none p-2 font-semibold" ref={img} type="text"  placeholder="Image Url"/> 
    <input className="text-white bg-blue-600 p-2 rounded-md" type="Submit" />
  </form>  </div>


  </div>
</>)
}
export default App