import { useHistory, useParams } from 'react-router-dom'

function ItemDetail() {

    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <p>Item id: {id}</p>
        </div>
    )
}

export default ItemDetail
