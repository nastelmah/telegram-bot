import { useEffect } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
const { getData } = require("./data/data.ts");

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
    tele.sendData({ name2: "dsdsdsd", success: true });
  };

  return (
    <>
      <Menu foods={getData()} onCheckout={onCheckout} />
    </>
  );
}

export default App;
