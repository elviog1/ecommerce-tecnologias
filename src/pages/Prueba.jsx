import Linkedin from "../svgComponents/Linkedin";
// import Trash from "../svgComponents/Trash";
// -

function Checkout() {
  return (
    <div className="container">
      <header className="header">
        <nav className="header_nav">
          <figure className="header_figure">
            <img className="header_logo" src="../../assets/logo.JPG" />
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
              <Linkedin />
            </li>
          </ul>
        </nav>
      </header>
      <span className="list_span">Lista de Compras</span>
      <main className="main">
        <section className="section">
          <article className="section_article">
            <img className="section_product" src="../../assets/logo.JPG" />
            <div className="section_details">
              <p className="section_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, voluptates. Magnam vel pariatur nostrum reiciendis
                repudiandae corrupti qui vero, soluta natus necessitatibus harum
                explicabo rerum fugit neque sed, a iste!
              </p>
              <span className="section_span">$0.00</span>
              <div className="section_buttons">
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
            <div className="section_button_trash">Trash</div>
          </article>
          <hr />
          <article className="section_article">
            <img className="section_product" src="../../assets/logo.JPG" />
            <div className="section_details">
              <p className="section_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, voluptates. Magnam vel pariatur nostrum reiciendis
                repudiandae corrupti qui vero, soluta natus necessitatibus harum
                explicabo rerum fugit neque sed, a iste!
              </p>
              <span className="section_span">$0.00</span>
              <div className="section_buttons">
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
            <div className="section_button_trash">Trash</div>
          </article>
        </section>

        <aside className="aside">
          <section className="aside_section">
            <span className="aside_span">Total del Pedido</span>
            <div className="aside_info">
              <span className="aside_subtotal">
                <p>Sub Total</p>
                <p>$0.00</p>
              </span>
              <span className="aside_subtotal">
              <p>Coston de envio</p>
              <p>$0.00</p>
              </span>
              <hr className="my"/>
              <span className="aside_subtotal">
              <p>Total</p>
              <p>$0.00</p>
              </span>
            </div>
            <button className="button_pay">Pagar ahora</button>
          </section>
          <p>Este producto esta agotado</p>
        </aside>
      </main>
    </div>
  );
}

