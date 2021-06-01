import { Link } from 'react-router-dom'

function AddButton() {
    return (
        <button>
            <Link to='/addItem'>Add new item</Link>
        </button>
    )
}

export default AddButton
