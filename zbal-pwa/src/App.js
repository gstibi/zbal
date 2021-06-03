import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import  { createStore, set, values, del } from 'idb-keyval'
import _ from 'lodash'

import Header from './components/Header'
import ChartArea from './components/ChartArea'
import ItemsList from './components/ItemsList'
import AddButton from './components/AddButton'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import ItemDetail from './components/ItemDetail'

function App() {
    const [items, setItems] = useState([])
    const itemsStore = createStore('zbal-items', 'items')

    /**
     * Read db and update state
     */
    useEffect(() => {
        const getItems = async () => {
            const data = await values(itemsStore)
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
        var id = _.uniqueId()
        item =  { id, ...item}
        await set(item.id, item, itemsStore)
        var data = await values(itemsStore)
        setItems([...data])
    }

    const deleteItem = async (id, history) => {
        await del(id, itemsStore)
        var data = await values(itemsStore)
        setItems([...data])
        history.push('/')
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
                    <Route path='/item/:id'>
                        <ItemDetail onDelete={deleteItem} itemsStore={itemsStore}/>
                    </Route>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
