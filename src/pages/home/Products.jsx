import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  //console.log(products);
  //filtering function (here item.category was in small letter in products.json )
  const filterItems = (Category) => {
    const filtered =
      Category === "all"
        ? products
        : products.filter((item) => item.category === Category);

    setFilteredItems(filtered);
    setSelectedCategory(Category);
  };
  //show all products
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  //sorting func
  const handleSortChange = (option) => {
    setSortOption(option);
    //logic for sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.newPrice - b.newPrice);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.newPrice - a.newPrice);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-8 mb-12">
      <h2 className="title">Purchase & go with trends</h2>
      {/* products card*/}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-28">
          <div className="flex flex-row justify-start md:items-center md:gap8 gap-4 text-Blue font-semibold">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All products
            </button>
            <button
              onClick={() => filterItems("Dress")}
              className={selectedCategory === "Dress" ? "active" : ""}
            >
              Clothing
            </button>
            <button
              onClick={() => filterItems("Hoodies")}
              className={selectedCategory === "Hoodies" ? "active" : ""}
            >
              Hoodies
            </button>
            <button
              onClick={() => filterItems("Perfume")}
              className={selectedCategory === "Perfume" ? "active" : ""}
            >
              Perfume
            </button>
            <button
              onClick={() => filterItems("Shoe")}
              className={selectedCategory === "Shoe" ? "active" : ""}
            >
              Shoes
            </button>
            <button
              onClick={() => filterItems("Sunglasses")}
              className={selectedCategory === "Sunglasses" ? "active" : ""}
            >
              Sunglasses
            </button>
            <button
              onClick={() => filterItems("Watches")}
              className={selectedCategory === "Watches" ? "active" : ""}
            >
              Watches
            </button>
          </div>
          {/* Sorting options*/}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-Black rounded-sm ">
              <FaFilter className="text-white h-4 w-6 mt-2 " />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-Black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>  {/*mistake was High-Low but I write high-low in sort switch */}
              <option value="high-to-low">High to low</option>
            </select>
          </div>
        </div>
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
