import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
const { getData } = require("./data/data.ts");

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    tele.ready();
  });

  const onCheckout = () => {
    console.log(cartItems);
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
    tele.sendData(cartItems);
  };

  return (
    <>
      <Menu
        foods={getData()}
        onCheckout={onCheckout}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;
