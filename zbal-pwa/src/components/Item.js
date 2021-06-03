import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <div>
            <h4>Name: {item.name}</h4>
            <p>Weight: {item.weight}</p>
            <Link to={'/item/' + item.id}>
                <button>Detail</button>
            </Link>
        </div>
    )
}

export default Item
