import React from "react";
// import { Navi, Product, Category } from "./components/imports";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
