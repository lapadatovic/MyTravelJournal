import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Navbar from './Components/NavbarComponent/Navbar';
import Card from './Components/CardComponent/Card';
import data from'./data.js'

function App() {
  let cards = data.map(item => {
    return (
      <Card data = {item}/>
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  );
}

export default App;
