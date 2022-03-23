import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import App from "../App";
import { Routes, Route } from "react-router-dom";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProductList />} />
      </Routes>
    </>
  );
};
