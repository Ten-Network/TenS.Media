import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/HomePage/Home';
import Footer from './Components/pages/Footer.js/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        
        <Route path='/' exact component={Home} />
        
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
