import React from 'react';
import './App.css';

import Header from './components/Header'
import ChartArea from './components/ChartArea'
import ItemsList from './components/ItemsList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <ChartArea/>
        <ItemsList/>
        <Footer/>
    </div>
  );
}

export default App;
