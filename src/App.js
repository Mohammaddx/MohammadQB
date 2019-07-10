import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contact from './Components/contact'
import Navbar from './Components/Navbar'
import './App.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar />
    <Route exact path = '/Home' component={Home} />
    <Route exact path = '/About' component={About} />
    <Route exact path = '/Resume' component={Resume} />
    <Route exact path = '/Portfolio' component={Portfolio} />
    <Route exact path = '/Contact' component={Contact} />
    </BrowserRouter>
    </div>
  );
}

export default App;

/*

 <BrowserRouter>
    <Navbar />
    <Route exact path = '/Home' component={Home} />
    <Route exact path = '/About' component={About} />
    <Route exact path = '/Resume' component={Resume} />
    <Route exact path = '/Portfolio' component={Portfolio} />
    <Route exact path = '/Contact' component={Contact} />
    </BrowserRouter>
    */