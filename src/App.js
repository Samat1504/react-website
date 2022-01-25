import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Objects from './components/pages/Objects';
import About from './components/pages/About';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/objects' component={Objects} />
                <Route path='/about' component={About} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/news' component={News} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
