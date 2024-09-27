import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import productdata from "../../components/Products";
import listingBanner from "/listingBanner_.jpg";
import Product from "../../components/product/Product";

function Listing() {
  const [products, setProducts] = useState(productdata);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Filter By Category");
  const [isOpen, setIsOpen] = useState(false);
  const { categoryName } = useParams();
  const location = useLocation(); // Use location to get search params
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search); // Parse query parameters
  const searchTerm = query.get("search") || ""; // Get search term from URL

  // Filter products based on the category and search term
  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();

    if (categoryName) {
      const filteredCategory = products.find(
        (cat) =>
          cat.category.replace(/\s+/g, "-").toLowerCase() ===
          categoryName.replace(/\s+/g, "-").toLowerCase()
      );
      if (filteredCategory) {
        const filteredItemsByCategory = filteredCategory.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTermLower) ||
            item.description.toLowerCase().includes(searchTermLower)
        );
        setFilteredItems(filteredItemsByCategory);
        setSelectedItem(filteredCategory.category);
      } else {
        setFilteredItems([]);
      }
    } else {
      const allProducts = products.flatMap((category) => category.items);
      const filteredItemsBySearch = allProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTermLower) ||
          item.description.toLowerCase().includes(searchTermLower)
      );
      setFilteredItems(filteredItemsBySearch);
    }
  }, [categoryName, products, searchTerm]);

  const catItems = products.map((val) => val.category);

  const handleItemClick = (item) => {
    navigate(`/category/${item.replace(/\s+/g, "-").toLowerCase()}`);
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
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
          <div className="listing-head-content flex justify-between items-center sm:pl-3 sm:gap-6">
            <div className="sm:w-1/2">
              <h3 className="capitalize font-bold">
                Showing results for{" "}
                <span className="text-Blue">{filteredItems.length}</span>{" "}
                products
              </h3>
            </div>
            <div className="relative inline-block sm:w-2/3">
              <button
                className={`bg-Yellow sm:w-[95%] transition-all hover:bg-yellow-500 text-white font-semibold py-2 px-4 sm:px-[10px] border border-gray-400 rounded shadow-md ${
                  isOpen ? "rounded-b-none" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedItem || "Select an item"}
              </button>
              <div
                className={`absolute bg-white rounded-b shadow-md w-full overflow-hidden overflow-y-scroll transition-max-height duration-300 ease-in-out ${
                  isOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <ul>
                  {catItems.map((item) => (
                    <li
                      key={item}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-xs font-semibold border-b border-[#f3f3f3] whitespace-nowrap"
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

        {/* Conditionally render based on filteredItems */}
        {filteredItems.length > 0 ? (
          <Product items={filteredItems} />
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600">
              No products found for this category or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Listing;
