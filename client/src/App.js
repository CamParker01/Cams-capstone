import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Page & Component Imports
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'
import Art from './pages/Art'
import Sport from './pages/Sport'
import Food from './pages/Food'
import Entertainment from './pages/Entertainment'
import Tour from './pages/Tour'
import Attractions from './pages/Attractions'
import SingleAttraction from './pages/SingleAttraction'

// Testing Video




// styles
import './styles/App.css';
import './styles/homePage.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Addattraction' component={AddAttraction} />
        <Route path='/viewattractions' component={Attractions} />
        <Route path='/Art' component={Art} />
        <Route path='/Sport' component={Sport} />
        <Route path='/Food' component={Food} />
        <Route path='/Entertainment' component={Entertainment} />
        <Route path='/Tour' component={Tour} />
        <Route path='/attractions/:id' component={SingleAttraction} />

        {/* <Route component={NotFound}/> */}
      </Router>
    </div>
  );
}
}


