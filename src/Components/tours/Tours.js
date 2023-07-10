
//import "./Tour.css"

function Tour(props) {
    return(
        
                <div style={{display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"30 px"}}>
                    <fieldset style={{marginTop:"25 px",backgroundColor:"#331D2C"}}>
                    <h5 style={{display:"flex",justifyContent:"center",fontFamily:"Cursive",fontSize:"25px",color:"#EFE1D1"}}>
                        {props.name}
                    </h5>
                    <img style={{width:"250 ",height:"250 ",borderRadius:"50%"}} src={props.image} alt={props.name} />
                    <p style={{display:"flex",justifyContent:"center", fontFamily:"Cursive",fontSize:"12px",color:"#EFE1D1"}}>
                       only for {props.price} $ Total steal as in we are liturally stealing you're money
                    </p>
                    </fieldset>
                </div>
        )
};
export default Tour
