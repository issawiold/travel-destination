import "./Home.css"
import {Routes,Route} from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import Tour from "../tours/tour/Tour";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Home() {
  const [id,setId]=useState("123")
    return (
      <div className="App">
        <header className="App-header">
       <Header/>
        </header>
        <Routes>
        <Route>
        <main> 
        <Route path="/" element={< Tours callback={setId}/> } />
        <Route path="/city/:id" element={< Tour id={id}/> } />

        </main>
        </Route></Routes>
        <footer>
            <Footer/>
        </footer>
      </div>
    );
  }
  export default Home