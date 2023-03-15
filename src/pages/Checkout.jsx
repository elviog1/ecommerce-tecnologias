import Linkedin from "../svgComponents/Linkedin";
import "./Checkout.css";
import { BsTrash } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";


function Checkout() {
  return (
    <div className="container">
      <header className="header">
        <nav className="header_nav">
          <figure className="header_figure">
            <p className="header_logo"  >Logo</p>
          </figure>
          <ul className="header_ul">
            <li className="header_li">Lorem</li>
            <li className="header_li">Lorem</li>
            <li className="header_li">Lorem</li>
            <li className="header_li">Lorem</li>
            <li className="header_li">Lorem</li>
            <li className="header_li">
              <input className="header_input" type="text" />
            </li>
            <li className="header_li">
            <BsBriefcase />
            </li>
          </ul>
        </nav>
      </header>
      <p className="list_span">Lista de Compras</p>
      <main className="main">
        <section className="section">
        <article className="section_article">
            <img className="section_product" src="../../assets/logo.JPG" />
            <div className="section_details">
              <p className="section_detail section_parrafo ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, voluptates. Magnam vel pariatur nostrum reiciendis
                repudiandae corrupti qui vero, soluta natus 
              </p>
              <span className="section_detail section_span">$0.00</span>
              <div className="section_detail section_buttons">
                <button className="section_button button_less">-</button>
                <button className="section_button button_o">O</button>
                <button className="section_button button_add">+</button>
                <button className="section_button button_save">
                  Guardar para mas tarde
                </button>
                <button className="section_button button_share">
                  Compartir
                </button>
              </div>
            </div>
            {/* <div className="section_button_trash"><BsTrash className="button_trash" /></div> */}
          </article>
          <hr className="hr"/>
          {/* <article className="section_article">
            <img className="section_product" src="../../assets/logo.JPG" />
            <div className="section_details">
              <p className="section_detail section_parrafo ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, voluptates. Magnam vel pariatur nostrum reiciendis
                repudiandae corrupti qui vero, soluta natus 
              </p>
              <span className="section_detail section_span">$0.00</span>
              <div className="section_detail section_buttons">
                <button className="section_button button_less">-</button>
                <button className="section_button button_o">O</button>
                <button className="section_button button_add">+</button>
                <button className="section_button button_save">
                  Guardar para mas tarde
                </button>
                <button className="section_button button_share">
                  Compartir
                </button>
              </div>
            </div>
            <div className="section_button_trash"><BsTrash className="button_trash" /></div>
          </article>
          <hr className="hr"/> */}
          {/* <article className="section_article">
            <img className="section_product" src="../../assets/logo.JPG" />
            <div className="section_details">
              <p className="section_detail section_parrafo ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, voluptates. Magnam vel pariatur nostrum reiciendis
                repudiandae corrupti qui vero, soluta natus 
              </p>
              <span className="section_detail section_price">$0.00</span>
              <div className="section_detail section_buttons">
                <button className="section_button button_less">-</button>
                <button className="section_button button_o">O</button>
                <button className="section_button button_add">+</button>
                <button className="section_button button_save">
                  Guardar para mas tarde
                </button>
                <button className="section_button button_share">
                  Compartir
                </button>
              </div>
            </div>
            <div className="section_button_trash"><BsTrash className="button_trash" /></div>
          </article> */}
        </section>
        <aside className="aside">
          <section className="aside_section">
            <span className="aside_section_title">Total del Pedido</span>
            <div className="aside_section_info">
              <span className="aside_section_span span_subtotal">
                <p>Sub Total</p>
                <p>$0.00</p>
              </span>
              <span className="aside_section_span span_envio">
                <p>Costo de envío</p>
                <p>$0.00</p>
              </span>
              <hr className="aside_section_hr"/>
              <span className="aside_section_span span_total">
                <p className="total">Total</p>
                <p>$0.00</p>
              </span>
            </div>
            <button className="aside_section_button--pay">Pagar ahora</button>
          </section>
          <p>Este producto esta agotado</p>
        </aside>
      </main>
    </div>
  );
}

export default Checkout;
