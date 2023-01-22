const Products = (props) => {
    const { products, addItem } = props;
    return (
        <div>
            <h3>Products</h3>
            <div class="Products">
                <For each={products}>
                    {(product) =>
                        <div class="Product">
                            <div>ID: {product.id}</div>
                            <div>Name: {product.name}</div>
                            <div>Price: {product.price}</div>
                            <button onClick={() => addItem(product)}>Add To Cart</button>
                        </div>
                    }
                </For>
            </div>
        </div>
    )
}

export default Products;
