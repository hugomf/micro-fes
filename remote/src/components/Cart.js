import { createEffect } from 'solid-js'
import {  createStore } from 'solid-js/store'

const createLocalStore = (initState) => {
    const [cart, setCart] = createStore(initState);
    if (localStorage.items) setCart(JSON.parse(localStorage.items));
    createEffect(() => (localStorage.items = JSON.stringify(cart)));
    return [cart, setCart];
}

const updateTotal = (items) => 
    items.reduce((res,{price,quantity}) => res + (price * quantity), 0);

const addItem = (item,cart,setCart) => {
    const idx = cart.items.findIndex(itm => itm.id === item.id);
    let updatedItems;
    if (idx !== -1) {
        updatedItems = cart.items.map((itm, i) => (i === idx) ? {...itm, quantity: itm.quantity + 1} : itm);
    } else {
        updatedItems = [...cart.items, {...item, quantity: 1}];
    }

    setCart({
        items: updatedItems,
        total: updateTotal(updatedItems)
    });
}

const removeItem = (item,cart,setCart) => {
    const idx = cart.items.findIndex(itm => itm.id === item.id);
    let updatedItems;
    if (idx > -1) {
        if (cart.items[idx].quantity > 1) {
            updatedItems = cart.items.map((itm, i) => (i === idx) ? {...itm, quantity: itm.quantity - 1} : itm);
        } else {
            updatedItems = cart.items.filter(itm => itm.id !== item.id);
        }
    }
    setCart({
        items: updatedItems,
        total: updateTotal(updatedItems)
    });
}

const Cart = () => {
    const [cart, setCart] = createLocalStore({
        items: [],
        total: 0
    });

    return { cart, addItem: (item) => addItem(item,cart,setCart), removeItem: (item) => removeItem(item,cart,setCart)};
}

export default Cart;
