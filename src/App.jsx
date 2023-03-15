import { useState } from "react";
// import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
// import Prueba from "./pages/Prueba";
// import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      <Checkout />
      {/* <Prueba/> */}
    </>
  );
}

export default App;
