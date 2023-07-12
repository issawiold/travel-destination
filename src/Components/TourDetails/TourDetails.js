
import { useState } from "react";
import db from "../../data/db.json"
import { useParams } from "react-router-dom";
function TourDetails( ) {
  const {id}=useParams()
  let obj=db.filter(e=>e.id===id)
  let info=obj.info
  let infoPartial=info.substr(0,info.length/4)+"..."
  const [infos,setInfo]=useState(infoPartial)
  let clicked=false
      if(!clicked){
        return(
          <>
      <p> {setInfo(infoPartial)}</p>
        <a onClick={clicked=!clicked}>show more</a></>)
    } return(<>
        <p>
        {setInfo(info)}
        </p>
        <a onClick={clicked=!clicked}>show less</a>
</>)}
    
  export default TourDetails