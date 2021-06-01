import Item from './Item'

function ItemsList({ items }) {

    return (
        <div className='items-list'>
            {items.map((item) => (<h3 key={item.id}>{item.name}</h3>))}
            {items.map((item) => (<Item item={ item }/>))}
        </div>
    )
}

export default ItemsList
