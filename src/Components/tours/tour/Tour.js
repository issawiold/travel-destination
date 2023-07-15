import db from "../../../data/db.json"
import "./Tour.css"
import TourDetails from "../../TourDetails/TourDetails"
    function Tour(props) {
        let obj=db.filter(e=>e.id===props.id)
        return (
            
            <div className="div">      
             <fieldset className="fieldset">
                <h4>
                    {obj[0].name}
                </h4>
                <img className="img"  src={obj[0].image} alt={obj[0].name} />
                <TourDetails id={props.id}/>
            </fieldset>
            </div>)
    }
    



export default Tour