import "./Menu.css";
import { IOrder, IProduct } from "../../types/foodOrder.interface";
import { ListFood } from "../ListFood/LIstFood";
import { useEffect, useState } from "react";
import { Loading } from "../../сomponents/Loading/Loading";
import { setCartsToSessionStorge } from "../../services/sessionStorage";

interface IMenuProps {
  foods: IProduct[];
  cartItems: IOrder[];
  setCartItems: React.Dispatch<React.SetStateAction<IOrder[]>>;
}

export const Menu = ({
  foods,
  cartItems,
  setCartItems,
}: IMenuProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [foodToSHow, setFoodToSHow] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFoodToSHow(foods);
    if (foods.length !== 0) {
      setIsLoading(false);
    }
  }, [foods.length]);

  const onAdd = (food: IProduct) => {
    const exist = cartItems.find((x) => x.product_id === food.product_id);
    if (exist) {
      const updatedCart = cartItems.map((x) =>
        x.product_id === food.product_id
          ? { ...exist, count: exist.count + 1 }
          : x
      );
      setCartItems(updatedCart);
      setCartsToSessionStorge(updatedCart);
    } else {
      setCartItems([...cartItems, { ...food, count: 1 }]);
      setCartsToSessionStorge([...cartItems, { ...food, count: 1 }]);
    }
  };

  const onRemove = (food: IProduct) => {
    const exist = cartItems.find((x) => x.product_id === food.product_id);
    if (exist && exist.count === 1) {
      const updatedCart = cartItems.filter(
        (x) => x.product_id !== food.product_id
      );
      setCartItems(updatedCart);
      setCartsToSessionStorge(updatedCart);
    } else {
      if (exist) {
        const updatedCart = cartItems.map((x) =>
          x.product_id === food.product_id
            ? { ...exist, count: exist.count - 1 }
            : x
        );
        setCartItems(updatedCart);
        setCartsToSessionStorge(updatedCart);
      }
    }
  };

  const searchFood = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length) {
      setFoodToSHow(
        foods.filter((food) =>
          food.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFoodToSHow(foods);
    }

    setInputValue(event.target.value);
  };

  return (
    <>
      <form className="menu__wrapper-form">
        <input
          className="menu__wrapper-form__input"
          type="search"
          placeholder="Search food..."
          value={inputValue}
          onChange={searchFood}
        />
      </form>
      {isLoading ? (
        <Loading />
      ) : foodToSHow.length === 0 && foods.length !== 0 ? (
        <div className="menu__empty-food-to-show">
          <span>Try other search terms</span>
        </div>
      ) : (
        <ListFood
          cartItems={cartItems}
          foods={foodToSHow}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}
    </>
  );
};
