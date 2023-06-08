import React from "react";
import Shirts from "../../images/products";
import Logos from "../../images/logos";
import RatingStars from "../Rating-stars/RatingStars";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={`${Shirts.blackTShirt2}`} alt="Product" />
      </div>

      <div className="product-card__details">
        <h3 className="product-card__title">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </h3>
        <div className="product-card__price">
          <p>9,999</p>
          <img
            src={`${Logos.adidasIcon}`}
            className="product-image"
            alt="Product"
          />
        </div>
        <div className="product-card__rating">
          <RatingStars rating={4} />
          <span>4.9 of 5</span>
        </div>
        <p className="product-card__location">
          Pickup From: <span>Genena Mall</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
