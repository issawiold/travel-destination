import db from "../../../data/db.json"
import TourDetails from "../../TourDetails/TourDetails"
    function Tour({id}) {
        let obj=db.filter(e=>e.id===id)
        return (
            
            <div>      
             <fieldset >
                <h5 >
                    {obj.name}
                </h5>
                <img  src={obj.image} alt={obj.name} />
                <TourDetails id={id}/>
            </fieldset>
            </div>)
    }
    



export default Tour