import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collections from "./Collections";
import Bestseller from "./Bestseller";
import Newletters from "./Newletters";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products/>
      <Collections/>
      <Bestseller/>
      <Newletters/>
      <Footer/>
    </div>
  );
};

export default Home;
