
import { useState } from "react";
import db from "../../data/db.json"
import { useParams } from "react-router-dom";
function TourDetails( ) {
  const {id}=useParams()
  let obj=db.filter(e=>e.id===id)
  let infoPartial=obj[0].info?.substr(0,obj[0].info?.length/4)+"..."
  const [infos,setInfo]=useState(infoPartial)
  console.log(infos);
  let [clicked,setClicked]=useState(false)
  return(
    <>
    <p className="p">{infos}</p>
  {clicked &&<button onClick={()=>{setClicked(!clicked);setInfo(infoPartial);}}>show less</button>}
  {!clicked && <button onClick={()=>{setClicked(!clicked);setInfo(obj[0].info);}}>show more</button>}</>)}
    
  export default TourDetails