import { useParams, useHistory, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { get } from 'idb-keyval'

function ItemDetail({ onDelete }) {

    const [item, setItem] = useState([])
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        const getItem = (async () => {
            const data = await get(id)
            data ? setItem(data) : history.push('/')
        })

        getItem()
    }, [history, id])

    return (
        <div>
            <p>Item id: {item.id}</p>
            <p>Item name: {item.name}</p>
            <p>Item weight: {item.weight}</p>
            <button onClick={() => onDelete(id, history)}>Delete</button>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default ItemDetail
