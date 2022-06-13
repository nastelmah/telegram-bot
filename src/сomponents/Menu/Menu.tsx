import { useState } from "react";
import "./Menu.css";
import { ICartItems, IFoodOrder } from "../../types/foodOrder.interface";
import { Cart } from "../Cart/Cart";
import { ListFood } from "../ListFood/LIstFood";

interface IMenuProps {
  foods: IFoodOrder[];
  cartItems: ICartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>;
  onCheckout: () => void;
}

export const Menu = ({
  foods,
  onCheckout,
  cartItems,
  setCartItems,
}: IMenuProps): JSX.Element => {
  const onAdd = (food: IFoodOrder) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food: IFoodOrder) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist && exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
          )
        );
      }
    }
  };

  return (
    <>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <ListFood foods={foods} onAdd={onAdd} onRemove={onRemove} />
    </>
  );
};

export default Menu;
