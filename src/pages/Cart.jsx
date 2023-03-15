import ItemCart from "../components/ItemCart";
import x from "./Cart.module.css";

function Cart() {
  return (
    <div className="w-80 min-h-screen shadow-[0_0_20px_#ccc] fixed bg-white right-0 top-0">
      <h3 className="p-5 pb-2 text-3xl font-medium">Tu carrito</h3>
      <hr />
      <div className="p-5 text-xs overflow-y-auto max-h-[88vh]">
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
    </div>
  );
}

export default Cart;
