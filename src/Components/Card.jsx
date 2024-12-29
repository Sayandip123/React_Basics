function Card(){
const Song = [{name:"Running up the hill",artist:"Kate bush"},{name:"This love",artist:"Maroon V"}]
 function handleClick(){
  alert("Downloading")
 }
return(<> <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-3">
 
  {Song.map((item,index)=>( <div key={index} className=" bg-slate-200 py-5 font-semibold outline-blue-100 px-10 w-fit rounded-md  ">Song: {item.name}
  <div className="my-5 ">Artist: {item.artist}</div>
   <button onClick={()=>handleClick()} className="w-fit px-2 py-1 bg-emerald-500 text-white rounded-md">Download</button>
    </div>
  ))}

</div>

 </>)

}
export default Card