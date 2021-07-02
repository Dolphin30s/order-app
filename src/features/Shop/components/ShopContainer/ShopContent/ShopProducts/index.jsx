import React, { useEffect, useState } from "react";

import ShopProduct from "./ShopProduct";

import { useSelector } from "react-redux";

import "./ShopProducts.scss";

function ShopProducts() {
  const [products, setProducts] = useState([]);

  const productData = useSelector((state) => state.shop);

  // get products to render
  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className="shop-products">
      {productData &&
        productData.map((item, index) => <ShopProduct key={index} {...item} />)}
    </div>
  );
}

export default ShopProducts;
