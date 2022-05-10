import "../src/Styles/App.css";
import React from 'react';
import {BreakpointProvider} from 'react-socks';
// Import components 
import Background from "./components/background";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Icons from "./components/Icons";
import About from "./components/About";
import Work from "./components/Work.js";
import Contact from "./components/Contact";

// rendering function
function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <Background />
        <Navbar />
        <Icons />
        <div className="sections">
          <Homepage />
          <About />
          <Work />
          <Contact />
        </div>
      </div>
    </BreakpointProvider>
    
    
  );
}

export default App;
