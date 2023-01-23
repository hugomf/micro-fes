import ShoppingItem from './ShoppingItem';
import Products from './Products';
import Cart from './Cart';
import {  Index } from "solid-js";

const ShoppingBag = () => {
    const products = [
        {'id': '1', 'name': 'prod1', 'price': '12.32'},
        {'id': '2', 'name': 'prod2', 'price': '2.90'},
        {'id': '3', 'name': 'prod3', 'price': '6.23'},
        {'id': '4', 'name': 'prod4', 'price': '10.25'},
        {'id': '5', 'name': 'prod5', 'price': '1.20'},
    ];

    const { cart, addItem, removeItem, updateItemQuantity } = Cart();

    return (
        <div>
            <table class="shoppingBag">
                <tbody>
                <Index each={cart.items} >
                    {(item) =>
                       <ShoppingItem item={item()} removeItem={removeItem} 
                        addItem={addItem} updateItemQuantity={updateItemQuantity} />
                    }
                </Index>
                </tbody>
            </table>
            <div>Total:${cart.total}</div>
            <Products products={products} addItem={addItem} />
        </div>
    );
}

export default ShoppingBag;