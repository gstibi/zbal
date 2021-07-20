import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <div className='container-md'>
            <div className='row'>
                <div className='col-6'>
                    <h4>{item.name}</h4>
                </div>
                <div className='col-6'>
                    <Link to={'/item/' + item.id}>
                        <button className='btn btn-primary'>Detail</button>
                    </Link>
                </div>
                <hr></hr>
            </div>
        </div>
        
    )
}

export default Item
