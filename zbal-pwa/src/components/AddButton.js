import { Link } from 'react-router-dom'

function AddButton() {
    return (
        <div className="floating-button">
            <Link to='/addItem'>
                <button className='btn btn-primary'>
                    Add new item
                </button>
            </Link>
        </div>

    )
}

export default AddButton
