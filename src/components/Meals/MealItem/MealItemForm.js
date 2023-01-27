import classes from "./MealItemForm.module.css";
import Input from "../../UI/input";
import CartContext from "../../../store/cart-context";
// import CartProvider from "../../../store/CartProvider";
import { useContext } from "react";
import { useRef, useState } from "react";
function MealItemForm(props) {
  const [amountIsvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);
  cartCtx.totalAmount = cartCtx.totalAmount + 1;
  const addFavorite = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    {props.onAddToCart(enteredAmountNumber)};

    console.log("Added to cart");
    console.log(props.id + " " + props.price);
  };
  return (
    <form className={classes.form} onSubmit={addFavorite}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
export default MealItemForm;
