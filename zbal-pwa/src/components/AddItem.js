import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import Button from './Button'

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
                <div className='list-group'>
                    <div className='list-group-item'>
                            <label className='form-label'>Name</label>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='Add name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                </div>

                <div className='list-group'>
                    <div className='list-group-item'>
                            <label className='form-label'>Weight</label>
                            <input
                                className='form-control'
                                type='number'
                                placeholder='0'
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                    </div>
                </div>
                
                <Button
                    text='Save item'
                    color='primary'
                    type='submit'
                    float='left'
                />
            </form>
            
            <Button
                text='Back'
                float='right'
                color='outline-primary'
                link='/'
            />
        </div>
    )
}

export default AddItem
