import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { get } from 'idb-keyval'

import Button from './Button'

function ItemDetail({ onDelete, itemsStore }) {

    const [item, setItem] = useState([])
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        const getItem = (async () => {
            const data = await get(id, itemsStore)
            data ? setItem(data) : history.push('/')
        })

        getItem()
    }, [history, id, itemsStore])

    return (
        <div className='list-group'>

            {Object.keys(item).map(value => {
                /*ID of item is not required in UI*/
                if(value === 'id'){
                    return false
                }
                return (
                    <div className='list-group-item list-group-item-action' key={item.id + value}>
                        <div className='d-flex justify-content-between'>
                            <p>{value}</p>
                            <h4>{item[value]}</h4>
                        </div>
                    </div>
                )
            })}

            <Button
                text='Delete'
                onClick={() => onDelete(id, history)}
                float='left'
                color='danger'
            />
            <Button
                text='Back'
                link='/'
                float='right'
                color='outline-primary'
            />
        </div>
    )
}

export default ItemDetail