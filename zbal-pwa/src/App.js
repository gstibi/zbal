import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import ChartArea from './components/ChartArea'
import ItemsList from './components/ItemsList'
import AddButton from './components/AddButton'
import Footer from './components/Footer'
import AddItem from './components/AddItem'

function App() {

    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Name of item',
            weight: 3
        },
        {
            id: 2,
            name: 'fs',
            weight: 2
        },
        {
            id: 3,
            name: 'fdsf',
            weight: 4
        },
    ])

    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <ChartArea/>
                        <ItemsList items={items}/>
                        <AddButton/>
                    </Route>
                    <Route path='/addItem'>
                        <AddItem/>
                    </Route>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
