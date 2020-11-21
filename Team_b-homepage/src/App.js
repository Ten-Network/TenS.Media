import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";

function App() {
  return (
    <div className="app">
      
      {/* Header*/}
      <Header/>

      
      <div className="app__body">
        
        <Sidebar/>
        
        <Feed/>
        
        <Widgets/>

      </div>    
    </div>
  );
}

export default App;
