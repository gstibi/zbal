import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function AddItem({ onAdd }) {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Add name')
        }

        onAdd({ name, weight })

        setName('')
        setWeight('')

        //go to landing page
        history.push('/')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Add name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Weight</label>
                <input
                    type='text'
                    placeholder='Weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    type='submit'
                    value='Save item'
                />
            </form>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default AddItem
