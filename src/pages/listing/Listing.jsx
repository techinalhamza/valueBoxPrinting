import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productdata from "../../components/Products";
import listingBanner from "/listingBanner_.jpg";
import Product from "../../components/product/Product";

function Listing() {
  const [products, setProducts] = useState(productdata);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Filter By Category");
  const [isOpen, setIsOpen] = useState(false);
  const { category } = useParams(); // Get the category from URL
  const navigate = useNavigate();

  useEffect(() => {
    // Filter products based on the category from the URL
    if (category) {
      const filtered = products
        .filter((product) => product.category === category.replace(/-/g, " "))
        .flatMap((category) => category.items);
      setFilteredItems(filtered);
      setSelectedItem(category.replace(/-/g, " "));
    } else {
      setFilteredItems(products.flatMap((category) => category.items));
    }
  }, [category, products]);

  const items = products.flatMap((category) => category.items);
  const catItems = products.map((val) => val.category);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    navigate(`/category/${item.replace(/\s+/g, "-")}`);
  };

  return (
    <>
      <div className="listing-container">
        <div
          className="listing-us-breadcrumb"
          style={{
            backgroundImage: `url(${listingBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="listing-overlay w-full h-full bg-[#0007] py-24 sm:py-16 ">
            <h1 className="text-7xl sm:text-4xl text-center text-[#fff]">
              All Listing
            </h1>
          </div>
        </div>
        <div className="main-container">
          <div className="listing-head border-b mt-8 pb-4">
            <div className="listing-head-content flex justify-between items-center">
              <h3 className="capitalize font-bold">
                showing result for{" "}
                <span className="text-Blue">{filteredItems.length}</span>{" "}
                products
              </h3>
              <div className="relative inline-block">
                <button
                  className={`bg-Yellow transition-all hover:bg-yellow-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow-md ${
                    isOpen ? "rounded-b-none" : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedItem || "Select an item"}
                </button>
                <div
                  className={`absolute bg-white border border-gray-400 rounded-b shadow-md w-full overflow-hidden transition-max-height duration-300 ease-in-out ${
                    isOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <ul>
                    {catItems.map((item) => (
                      <li
                        key={item}
                        className="py-2 px-4 hover:bg-gray-100"
                        onClick={() => handleItemClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Product items={filteredItems} />
        </div>
      </div>
    </>
  );
}

export default Listing;
