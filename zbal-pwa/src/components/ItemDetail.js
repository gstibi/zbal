import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ItemDetail() {

    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <p>Item id: {id}</p>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default ItemDetail
