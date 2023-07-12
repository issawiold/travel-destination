import "./Tours.css"
import db from "../../data/db.json"
import { Link } from "react-router-dom";
function Tours({callback}) {
    console.log(db);
    
    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"30px"}}>
        {db.map((obj,i)=>{return(

                    <fieldset style={{marginTop:"50px",backgroundColor:"#331D2C"}}>
                    <h5 style={{display:"flex",justifyContent:"center",fontFamily:"Cursive",fontSize:"25px",color:"#EFE1D1"}}>
                        {obj.name}
                    </h5>
                    <Link><img style={{width:"250px",height:"250px",borderRadius:"50%"}} onClick={callback(obj.id)} src={obj.image} alt={obj.name} /></Link>
                    <p style={{display:"flex",justifyContent:"center", fontFamily:"Cursive",fontSize:"12px",color:"#EFE1D1"}}>
                       only for {obj.price} $ Total steal as in we are liturally stealing you're money
                    </p>
                    </fieldset>
                )}
        )}
       </div> )
};
export default Tours
