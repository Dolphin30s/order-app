import React, { useEffect } from "react";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";

import { useParams } from "react-router-dom";

import { useFilterProducts } from "hooks/useFilterProducts";

import "./ShopContainer.scss";

function ShopContainer() {
  const { name } = useParams();
  const filterInitialProducts = useFilterProducts();

  useEffect(() => {
    const params = {
      _limit: 10,
    };

    filterInitialProducts(name, params);
  }, [name, filterInitialProducts]);

  return (
    <div className="shop-container">
      <ShopFilters />
      <ShopContent />
    </div>
  );
}

export default ShopContainer;
