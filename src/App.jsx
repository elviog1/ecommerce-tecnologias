import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ItemCart from "./components/ItemCart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Cart />
    </>
  );
}

export default App;
