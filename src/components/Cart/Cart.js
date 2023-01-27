import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
function Cart(props){
    const cartCtx=useContext(CartContext);

    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    // const price=`$${props.price.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1});
    }
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }
    // const addOneItem=(id)=>{
    //     cartCtx.addItem({
    //         id:id,
    //     });
    // }
    // const removeOneItem=()=>{
    //     cartCtx.removeItem('c1');
    // }
    return(
        <Modal onClose={props.onClose}>
        <div className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul className={classes.cartitems}>
                {cartCtx.items.map((item)=>
                <li>
                    <div>
                        <h3>{item.name}</h3>
                        <div className={classes.total}>
                            <span >{item.price}</span>
                            <span >x {item.amount}</span>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={cartItemRemoveHandler.bind(null,item.id)}>-</button>
                        <button onClick={cartItemAddHandler.bind(null,item)}>+</button>
                    </div>
                </li>
                )}

            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
        </div>
        </Modal>
    );
}
export default Cart;