import Item from './Item'

function ItemsList({ items }) {

    return (
        <div className='items-list'>
            {items.map((item) => (<Item key={item.id} item={ item }/>))}
        </div>
    )
}

export default ItemsList
