function Friends({value,handleClick,index}){
const {name,profession,img,friends} = value
return(<><div className="w-[15vw] h-[32vh] bg-slate-300"> <div className="w-[10vw] h-[25vh] rounded-md text-white bg-slate-700">
  <img className="w-full h-full  object-cover " src={img} alt="" /></div>

<div className="text-xs ">{profession} </div>
  <div> {name}
  <button className={`mx-5 p-2 ${ friends === false? 'bg-blue-400':'bg-red-600'} rounded-md text-xs text-white`} onClick={()=>handleClick(index)}>
    {friends === false ? "Add Friend":"Remove"}</button>
  </div>
 </div>

</>)
}
export default Friends