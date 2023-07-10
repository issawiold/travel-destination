import "./Home.css"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tour from "../tours/Tours";
import db from "../../data/db.json"

function Home() {
    return (
      <div className="App">
        <header className="App-header">
       <Header/>
        </header>
        <main>
          {db.map((obj,i)=>{return( 
          <Tour name={obj.name} image={obj.image} price={obj.price} />
          )
          })
            
          }
            
        </main>
        <footer>
            <Footer/>
        </footer>
      </div>
    );
  }
  export default Home