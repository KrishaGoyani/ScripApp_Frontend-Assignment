"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { ProductData } from "./ProductGrid";

const ProductCard = ({ product }: { product: ProductData }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      {product.id === 1 && (
        <div className="img-overlay">
          <div className="out-of-stock">OUT OF STOCK</div>
        </div>
      )}
      <div className="product-description">
        <div>
          <h4
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.title}
          </h4>
          <p
            className="product-card-links"
            style={{ textDecoration: "underline" }}
          >
            Sign in
          </p>{" "}
          <span className="product-card-links">or </span>
          <p className="product-card-links">Create an account to see pricing</p>
        </div>
        <Heart
          onClick={() => setIsActive(!isActive)}
          className={isActive ? "active-heart-icon" : "heart-icon"}
        />
      </div>
    </div>
  );
};

export default ProductCard;
