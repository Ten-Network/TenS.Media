import React from "react";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
