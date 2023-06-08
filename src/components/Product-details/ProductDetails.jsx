import Divider from "../Divider/Divider";
import Shirts from "../../images/products";
import Logos from "../../images/logos";
import RatingStars from "../Rating-stars/RatingStars";
import "./ProductDetails.scss";

const ProductDetails = ({ onAddToCart }) => {
  return (
    <div className="product-details ">
      <div className="product-details__image">
        <div className="product-details__image-main">
          {/* <ProductCarousel /> */}
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
        </div>
        <div className="product-details__image-paging">
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
          <img src={`${Shirts.blackTShirt1}`} alt="hamburger icon" />
        </div>
      </div>
      <div className="product-details__description">
        <a className="product-details__logo" href="#">
          <img src={Logos.adidasIcon} alt="Adidas Logo" />
        </a>
        <h2 className="product-details__title ">
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </h2>
        <h3 className="product-details__cat-name">Men</h3>

        <div className="product-details__rating">
          <RatingStars rating={4} />
          <span className="rating-text-1">4.9 of 5</span>
          <span className="rating-text-2">22 Rates</span>
        </div>
        <div className="product-details__price">
          <span className="product-details__price--value">
            9,999 <span>LE</span>
          </span>
          <span className="product-details__price--original">9,999</span>
          <span className="product-details__price--discount">30% off</span>
        </div>
        <Divider />
        <h2 className="product-details__subtitle">Size</h2>
        <div className="product-details__sizes">
          <div className="product-details__sizes--item">Small</div>
          <div className="product-details__sizes--item">Medium</div>
          <div className="product-details__sizes--item">Large</div>
          <div className="product-details__sizes--item">X Large</div>
          <div className="product-details__sizes--item">XX Large</div>
        </div>
        <Divider />
        <h2 className="product-details__subtitle">Color</h2>
        <div className="product-details__colors">
          <div className="color-img">
            <img src={`${Shirts.blackTShirt1}`} alt="Shirts icon" />
          </div>
          <div className="color-img">
            <img src={`${Shirts.blackTShirt1}`} alt="Shirts icon" />
          </div>
        </div>
        <Divider />
        <h2 className="product-details__subtitle">Quantity</h2>
        <div className="quantity-control">
          <button className="quantity-circle minus">-</button>
          <span className="quantity-number">{1}</span>
          <button className="quantity-circle plus">+</button>
        </div>
        <div className="cta-buttons">
          <button onClick={onAddToCart} className="cta-buttons__add-to-cart">
            Add to Cart
          </button>
          <button className="cta-buttons__pick-up">Pick Up from Store</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
