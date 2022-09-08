import React from "react";

import{BrowserRouter as Router, Routes ,Route} from "react-router-dom"
  
import Header from "./Header";
import './Header.css';
import './App.css';

function App() {
  return (
    
    <Router>
     
    <div className="App">
      
     
    <Header/>
    </div>
    </Router>
    
  );
}

export default App;
