import React, { useState, useEffect } from "react";
import { products } from "./data";
import Filter from "./Filter";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filters, setFilters] = useState({ color: "", capacity: "" });

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        let filteredProducts = products;

        if (filters.color) {
          filteredProducts = filteredProducts.filter((product) =>
            product.data?.color
              ?.toLowerCase()
              .includes(filters.color.toLowerCase())
          );
        }

        if (filters.capacity) {
          filteredProducts = filteredProducts.filter((product) =>
            product.data?.capacity
              ?.toLowerCase()
              .includes(filters.capacity.toLowerCase())
          );
        }

        setProductList(filteredProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchData();
  }, [filters]);

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            {product.data && (
              <ul>
                {Object.entries(product.data).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
