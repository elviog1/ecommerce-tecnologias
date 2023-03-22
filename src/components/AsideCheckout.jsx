import React from 'react'

const AsideCheckout = () => {
  return (
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
  )
}

export default AsideCheckout
