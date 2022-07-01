import { useEffect, useState } from "react";
import "./App.css";
import { Menu } from "./сomponents/Menu/Menu";
import { OrderFood } from "./сomponents/OrderFood/OrderFood";
import { getProducts } from "./services/getProducts";

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [comments, setComments] = useState("");
  const [isOrderFood, setIsOrderFood] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        const foods = response
          .map((item) => {
            return item.products;
          })
          .flat();
        setFoods(foods);
      })
      .catch((error) => {
        console.log(error);
      });
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
      tele.MainButton.text = `Pay ${totalPrice} AED`;
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
