import "./Home.css"
import {Routes,Route} from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import Tour from "../tours/tour/Tour";
import { useState } from "react";
function Home() {
  const [id,setId]=useState("123")
  const  getValue=(value)=>{
    return setId(value)
  }
    return (
      <section>
        <header className="App-header">
       <Header/>
        </header>
        <main> 
        <Routes>
        <Route>
        
        <Route path="/" element={< Tours callback={getValue}/> } />
        <Route path="/city/:id" element={< Tour id={id}/> } />

        
        </Route></Routes>
        </main>
        <footer>
            <Footer/>
        </footer>
      </section>
    );
  }
  export default Home