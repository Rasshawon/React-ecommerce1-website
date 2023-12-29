import React from "react";
import { Link } from 'react-router-dom'

const Category = () => {
  const companyLogo = [
    { id: 1, img: "/images/company img/1.png" },
    { id: 2, img: "/images/company img/2.png" },
    { id: 3, img: "/images/company img/3.png" },
    { id: 4, img: "/images/company img/4.png" },
    { id: 5, img: "/images/company img/5.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brand logo*/}
      <div className=" flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />{" "}
          </div>
        ))}
      </div>
      {/* category grid*/}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
        <p className="font-semibold uppercase text-center md:-rotate-90 bg-Blue text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new & gorgeous fashion
        </p>
        <div>
            <Link to="https://www.imdb.com/name/nm0424060/"><img src="/images/Category-img/1.jpg" alt="" className="w-full hover:scale-105 transition-all duration-200"/></Link>
        </div>
        <div  className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
            <Link to="https://www.imdb.com/name/nm1165110/"><img src="/public/images/Category-img/2.jpg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
            <Link to="https://www.pexels.com/@vanyaoboleninov/stats/"><img src="/public/images/Category-img/3.jpg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
            <Link to="https://en.wikipedia.org/wiki/David_Beckham"><img src="/public/images/Category-img/4.jpeg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
            <Link to="https://www.pexels.com/@vanyaoboleninov/stats/"><img src="/public/images/Category-img/pexels-ivan-oboleninov-2916814.jpg" alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
