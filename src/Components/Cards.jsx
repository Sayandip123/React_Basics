function Cards({users ,Remove}){

return(<> <div className=" w-[50vw] h-[50vh] bg-gray-500 rounded-md p-2 flex gap-4 overflow-y-hidden " >{users.map((item,index) => 
  <div key={index}>
    <div className=" w-[12vw] h-[21vh] p-1 bg-white rounded-lg">
      <div className="w-10 h-5 p-5  rounded-full bg-black relative flex justify-self-center " >
        <img className=" w-full absolute " src={item.img} alt="" /></div>
      <h1 className="flex justify-center opacity-60">{item.name}</h1>
      <h1 className="flex justify-center">{item.task}</h1>
      <button onClick={()=>Remove(index)} className="bg-red-500 p-2 text-sm text-white rounded-md flex justify-self-center">Remove</button>
    </div>
  </div>
   )}  </div> 

</>)
}
export default Cards