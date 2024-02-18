import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API_PRODUCTS } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }
  async function readProduct() {
    let { data } = await axios(API_PRODUCTS);
    setData(data);
  }
  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
