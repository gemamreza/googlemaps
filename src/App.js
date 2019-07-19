import React from 'react';
import Map from './components/Map';
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Route path='/' component={Map} exact />
    </div>
  );
}

export default App;
