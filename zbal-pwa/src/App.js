import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import  { get, set, update, entries, keys, values } from 'idb-keyval'

import Header from './components/Header'
import ChartArea from './components/ChartArea'
import ItemsList from './components/ItemsList'
import AddButton from './components/AddButton'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import ItemDetail from './components/ItemDetail'

function App() {

    const [items, setItems] = useState([])

    /**
     * Read db and update state
     */
    useEffect(() => {
        const getItems = async () => {
            const data = await values()
            if(data){
                setItems(data)
            }
            else{
                setItems([])
            }
        }

        getItems()
    }, [])

    const addItem = async (item) => {
        //generate random id
        var id = Math.floor(Math.random() * 100)
        item =  { id, ...item}
        await set(item.id, item)
        var data = await values()
        console.log(data)
        setItems([...data])
    }

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
                        <AddItem onAdd={addItem}/>
                    </Route>
                    <Route path='/:id'>
                        <ItemDetail/>
                    </Route>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
