import { useDispatch, useSelector } from "react-redux";
import CategoryListItem from './CategoryListItem';
import {clearCart} from '../utils/cartSlice';

const CartList = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    }
    return(<div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 rounded-lg bg-black text-white" onClick={handleClearCart}>Clear cart</button>
        {cartItems?.length ===0 && <h1>Cart is Empty. Add Items to Cart</h1>}
            <CategoryListItem items={cartItems}/>
        </div>
        </div>)
}
export default CartList;