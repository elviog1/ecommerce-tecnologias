import Linkedin from "../svgComponents/Linkedin";
import "./Checkout.css";
import { BsTrash } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import AsideCheckout from "../components/AsideCheckout";
import ArticleCheckout from "../components/ArticleCheckout";
import Header from "../components/Header";


function Checkout() {

  let arreglo = [1,2]

  return (
    <>
    <Header/>
    <div className="container">
      <p className="list_span">Lista de Compras</p>
      <main className="main">
        <section className="section">
          {
            arreglo?.length > 0 && arreglo.map((e,i)=> {
              return (
                <ArticleCheckout key={i}/>
                )
              })
            }
        </section>
        <AsideCheckout />
      </main>
    </div>
    </>  
  );
}

export default Checkout;
