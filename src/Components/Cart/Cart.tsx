import "./Cart.css";
import { Button } from "../Button/Button";
import { ICartItems } from "../../types/foodOrder.interface";

interface ICartProps {
  cartItems: ICartItems[];
  onCheckout: () => void;
}

export const Cart = ({ cartItems, onCheckout }: ICartProps) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="">Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
};
