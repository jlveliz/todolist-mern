import React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


import Navigations from './components/Navigations';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser'



function App() {
  return (
    <Router>
          <Navigations/>
          <div className="container pt-2">
            <h3 className="text-center">Aplicacion React</h3>
            
            <Route path="/" component={NotesList} exact/>
            <Route path="/edit/:id" component={CreateNote}/>
            <Route path="/create" component={CreateNote}/>
            <Route path="/user" component={CreateUser}/>
          </div>
          
    </Router> 
  );
}

export default App;
