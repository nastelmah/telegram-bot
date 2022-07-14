import { useEffect, useState } from "react";
import "./App.css";
import { Menu } from "./сomponents/Menu/Menu";
import { OrderFood } from "./сomponents/OrderFood/OrderFood";
import { getProducts } from "./services/getProducts";
import {
  getCartsFromSessionStorge,
  getProductsFromSessionStorge,
  setProductsToSessionStorge,
} from "./services/sessionStorage";
import { currencySatoshiFromAED } from "./services/getCurrency";
const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [comments, setComments] = useState("");
  const [isOrderFood, setIsOrderFood] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (getProductsFromSessionStorge()) {
      setFoods(getProductsFromSessionStorge());
    } else {
      Promise.all([getProducts(), currencySatoshiFromAED()])
        .then((response) => {
          const foods = response[0]
            .map((item) => {
              return item.products;
            })
            .flat();
          const satoshi = response[1].satoshi;
          const changedPriceSatsFoods = foods.map((food) => {
            return { ...food, price: food.price / satoshi };
          });
          setFoods(changedPriceSatsFoods);
          setProductsToSessionStorge(changedPriceSatsFoods);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (getCartsFromSessionStorge()) {
      setCartItems(getCartsFromSessionStorge());
    }
  }, []);

  useEffect(() => {
    tele.ready();
  });

  useEffect(() => {
    if (isOrderFood) {
      const totalPrice = cartItems.reduce((acc, object) => {
        acc = acc + object.price * object.count;
        return acc;
      }, 0);
      tele.MainButton.text = `Pay ${Math.ceil(totalPrice)} SATS`;
      tele.MainButton.show();
      tele.MainButton.onClick(onClickMainButton);
    }

    if (!isOrderFood && cartItems.length) {
      tele.MainButton.text = "VIEW ORDER";
      tele.MainButton.show();
      tele.MainButton.onClick(onClickMainButton);
    }

    return () => {
      tele.MainButton.offClick(onClickMainButton);
    };
  }, [cartItems, isOrderFood, comments]);

  function onClickMainButton() {
    if (!isOrderFood) {
      setIsOrderFood(true);
    }
    if (isOrderFood) {
      const order = cartItems.map((item) => {
        return { product_id: item.product_id, count: item.count };
      });
      const responseForBot = { order: order, comments: comments };
      tele.sendData(JSON.stringify(responseForBot));
    }
  }

  return (
    <>
      {isOrderFood ? (
        <>
          <OrderFood
            comments={comments}
            setComments={setComments}
            cartItems={cartItems}
            setIsOrderFood={setIsOrderFood}
          />
        </>
      ) : (
        <>
          <Menu
            foods={foods}
            setFoods={setFoods}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </>
      )}
    </>
  );
}

export default App;
