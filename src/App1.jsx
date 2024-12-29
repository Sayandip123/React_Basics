import { useRef } from "react"

function App1(){
const name = useRef(null)
const age = useRef(null)

function HandleSubmit(e){
  e.preventDefault()
  console.log(name.current.value)
  console.log(age.current.value)
}
return(<><form action="" onSubmit={HandleSubmit}>
  <input className="border-2 outline-blue-600" type="text" placeholder="name" ref={name} />
  <input className="border-2 outline-black" type="number" placeholder="age" ref={age} />
  <input type="Submit" />
  </form></>)
}
export default App1