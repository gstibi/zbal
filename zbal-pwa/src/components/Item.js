import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Link to={'/item/' + item.id} className="list-group-item list-group-item-action">
            <div className='d-flex justify-content-between'>
                <h4>{item.name}</h4>
                <div><span className="badge bg-secondary">{item.weight} kg</span></div>
                
            </div>
            
            
        </Link>
        
    )
}

export default Item
