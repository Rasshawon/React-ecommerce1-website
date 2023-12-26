/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center item-center gap-12 shadow-sm">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img className="h-80 w-64 mx-auto hover:scale-105 transition-all duration-300" src={item.image} alt={item.title} />
          </Link>
          <div className="mt-4 p-4 items-start">
            <h4 className="font-semibold text-Black text-base mb-2">
              {item.title}
            </h4>
            <div className="flex justify-between">
              <p className="font-semibold text-blue-500">{item.category}</p>
              <p className="font-semibold"><del className=" text-red-500">${item.prevPrice}</del>  ${item.newPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
