import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ItemCart from "./components/ItemCart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cart />
      <div className="bg-red-200">S</div>
    </>
  );
}

export default App;
