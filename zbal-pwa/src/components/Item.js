import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Link to={'/item/' + item.id}>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-6'>
                        <h4>{item.name}</h4>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-primary'>Detail</button>
                    </div>
                </div>
                <hr></hr>
            </div>
        </Link>
    )
}

export default Item
