import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Photo(){
  const [val,setVal] = useState(false)
return(<> <div className="w-full h-screen bg-zinc-400 flex justify-center items-center ">
  <div className={`overflow-hidden  flex relative  w-[20vw] h-[30vh] rounded-md   `}>
    <img className={` ${ val == false ?  '-translate-x-0 duration-120 transition-transform':'-translate-x-[100%]'} w-full h-full shrink-0 absolute` }  src=" https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className={` ${val == true? '-translate-x-0 duration-120 transition-transform' : '-translate-x-[100%] absolute' } shrink-0`} src="https://images.unsplash.com/photo-1600298882525-1ac025c98b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    

  </div>

  <span onClick={()=>setVal((prev)=>!prev)} className=" bg-white rounded-full p-3 mt-10 bg-[#e7e3e37b] absolute flex justify-center items-center font-bold text-2xl"> 
  < FaArrowRightLong/></span>

  </div>  </>)
}
export default Photo