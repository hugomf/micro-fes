import { createEffect, For, createSignal } from 'solid-js'
import "./ShoppingBag.scss"
import { FaRegularTrashCan } from 'solid-icons/fa'

const ShoppingItem = (props) => {

    const { item, removeItem, addItem, updateItemQuantity } = props;
    const [quantity, setQuantity] =  createSignal(item.quantity);

    const updateQuantity = (quantity) => {
        updateItemQuantity(item, quantity);
        setQuantity(quantity);
    }

    return (
        <tr class="shoppingItem">
            <td class="col">{item.name}</td>
            <td class="col">{item.price}</td>
            <td class="col">
                <div class="quantityGroup">
                    <button class="btnQuantity" onClick={() => removeItem(item)}>-</button>
                    <input class="quantity" type="text" value={quantity()} onInput={(e) => updateQuantity(e.currentTarget.value)}></input>
                    <button class="btnQuantity" onClick={() => addItem(item)}>+</button>
                </div>
            </td>
            <td class="col"><button onClick={() => removeItem(item)}><FaRegularTrashCan /></button></td>
        </tr>
    );
}

export default ShoppingItem;
