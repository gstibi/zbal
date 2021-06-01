function Item({ item }) {
    return (
        <div>
            <h5>{item.name}</h5>
            <p>{item.id}</p>
            <p>{item.weight}</p>
        </div>
    )
}

export default Item
