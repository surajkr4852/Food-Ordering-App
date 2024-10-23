import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center mx-auto p-10 w-8/12">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="6/12">
                <button className="h-8 bg-gray-200 text-gray-800 font-medium px-3 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length===0 && <h1>Your cart is empty.. Add items to the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;