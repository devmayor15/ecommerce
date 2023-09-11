import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Martins Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default shop;
