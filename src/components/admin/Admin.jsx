import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarTop from "../Navbar/NavbarTop";
import { useProduct } from "../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });

  function handleInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleCreateProduct() {
    addProduct(product);
  }
  return (
    <>
      <NavbarTop />
      <NavbarTest />
      <Box
        sx={{
          margin: "100px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            onChange={handleInput}
            name="name"
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            name="price"
            id="outlined-basic"
            label="price"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            name="type"
            id="outlined-basic"
            label="type"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            name="image"
            id="outlined-basic"
            label="image"
            variant="outlined"
          />
          <Button onClick={handleCreateProduct} variant="contained">
            Add New Shoes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
