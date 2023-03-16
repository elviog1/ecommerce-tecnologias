import React from 'react'
import { BsTrash } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
const ArticleCheckout = () => {
  return (
    <>
    <article className="section_article">
    <img className="section_product" src="https://http2.mlstatic.com/D_NQ_NP_2X_659520-MLM51338788281_082022-F.webp" />
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
  <hr className="hr"/>
    </>
  )
}

export default ArticleCheckout
