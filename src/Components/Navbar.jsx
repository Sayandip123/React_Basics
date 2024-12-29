function Navbar(){

  const data = [{image:"https://i.shgcdn.com/86868183-1cdf-44eb-bf5e-483a6c4139de/-/format/auto/-/preview/3000x3000/-/quality/lighter/",name:"Amazon basics.",description:"Lorem ipsum dolor sit amet consectsada adipisicing elit. Commodi, sit?",stock:"available"},{image:"https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lc3NlbmdlcnxlbnwwfHwwfHx8MA%3D%3D",name:"Facebook.",description:"Lorem ipsum dolor sit amet consectsada adipisicing elit. Commodi, sit?",stock:"not available"},{image:"https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2dsZSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",name:"Google.",description:"Lorem ipsum dolor sit amet consectsada adipisicing elit. Commodi, sit?",stock:"not available"},{image:"https://i.shgcdn.com/86868183-1cdf-44eb-bf5e-483a6c4139de/-/format/auto/-/preview/3000x3000/-/quality/lighter/",name:"Amazon basics.",description:"Lorem ipsum dolor sit amet consectsada adipisicing elit. Commodi, sit?",stock:"available"}]
return (<><div className="w-full flex-wrap relative h-screen bg-zinc-400 flex justify-center items-center gap-8">
{data.map((item,index)=>(<div key={index}>   <div className=" h-50 w-52  overflow-hidden  rounded-md bg-zinc-200">
  <div className="w-full h-30 overflow-hidden bg-amber-50  items-center   ">
    <img className="object-cover w-fit" src={item.image} alt="" />
  </div>
  <div className="py-2 px-1  font-semibold">{item.name}</div>
  <div className=" tracking-tight w-fit text-xs px-1 py-1 leading-2"><p>{item.description} </p></div>
  <div className="flex justify-center"><button className={`px-2 py-1 text-xs ${item.stock === 'available'? 'bg-blue-6 00' : 'bg-red-700'} text-zinc-100 my-1  bg-blue-700 rounded-md`}>{item.stock}</button> </div>
  
   </div>
 
</div>))}
</div>
  </>)
}
export default Navbar