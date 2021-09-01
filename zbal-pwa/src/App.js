import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'
import  { createStore, set, values, del } from 'idb-keyval'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import ItemsList from './components/ItemsList'
import Button from './components/Button'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import ItemDetail from './components/ItemDetail'
import ChartComponent from './components/ChartComponent'

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

        //TODO: solve problem with imtesStore causing frequent calls of useEffect
        getItems()
    }, [])

    const addItem = async (item) => {
        //generate random id
        var id = Date.now().toString()
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
            <div className="app">
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <div className="chart-area">
                            <ChartComponent items={items}/>
                        </div>
                        <ItemsList items={items}/>
                        <Button
                            text='Add new item'
                            link='/addItem'
                            float='center'
                            color='primary'
                        />
                    </Route>
                    <Route path='/addItem'>
                        <AddItem onAdd={addItem}/>
                    </Route>
                    <Route path='/item/:id'>
                        <ItemDetail onDelete={deleteItem} itemsStore={itemsStore} items={items}/>
                    </Route>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
