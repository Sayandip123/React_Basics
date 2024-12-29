import { list } from "postcss"
import { useState } from "react"

function Filter(){
const [arr,setArr] = useState(["Go to Gym","Go to Study","Do Lunch","Go to Study","Sleep"])
return(<><h1>Todos</h1>

{arr.map((item,index)=> (<li key={index}>{item}</li>))}
<button onClick={()=>setArr(()=>arr.filter((item,index) => index!=arr.length-1  ))} className="p-2 bg-red-400 rounded-lg text-xs">Remove</button>
</>)


}
export default Filter