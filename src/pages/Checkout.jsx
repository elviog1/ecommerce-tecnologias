import Linkedin from "../svgComponents/Linkedin";
import "./Checkout.css";
import { BsTrash } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import AsideCheckout from "../components/AsideCheckout";
import ArticleCheckout from "../components/ArticleCheckout";


function Checkout() {
  return (
    <div className="container">
      <p className="list_span">Lista de Compras</p>
      <main className="main">
        <section className="section">
          <ArticleCheckout />
        </section>
        <AsideCheckout />
      </main>
    </div>
  );
}

export default Checkout;
