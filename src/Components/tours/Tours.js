import "./Tours.css"
import db from "../../data/db.json"
import { Link } from "react-router-dom";
function Tours({callback}) {
    
    return(
        <div className="div1">
        {db.map((obj,i)=>{return(
                    <Link to={`/city/${obj.id}` }onClick={()=>callback(obj.id)}>
                    <fieldset className="fieldset1">
                    <h5 className="h5">
                        {obj.name}
                    </h5>
                    <img className="img1" src={obj.image} alt={obj.name} />
                    <p className="p1">
                       only for {obj.price} $ Total steal as in we are liturally stealing you're money
                    </p>
                    </fieldset>
                    {console.log(obj.id)}
                    </Link>
                )}
        )}
       </div> )
};
export default Tours
