import React from "react";
import Categoria from "./Categoria";
import Card from "./Card";

const Cards = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div className="max-w-6xl my-0 mx-auto mt-[20px] flex justify-between">
      <div className="bg-white w-[250px] h-max">
        <p className="text-[20px] font-bold">Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
        <p>Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
        <p>Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
      </div>

      <div className="w-[900px] h-[max-content] flex flex-wrap justify-evenly">
        {arr?.length > 0
          ? arr.map((item) => {
              return <Card key={item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Cards;
