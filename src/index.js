import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CreateProduct from "./Pages/CreateProduct";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
