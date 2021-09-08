import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Aboutme from "./pages/Aboutme";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Navigation/>
    </header>
    <main>
        <Home/>
        <Portfolio/>
        <Skills/>
        <Aboutme/>
    </main>
    <footer>
      
    </footer>
    
    </BrowserRouter>
  );
}

export default App;
