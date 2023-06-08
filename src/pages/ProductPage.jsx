import { Component } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Divider from "../components/Divider/Divider";
import "./ProductPage.scss";
import ProductCard from "../components/Product-card/ProductCard";

import Layout from "../components/Layout/Layout";
import { getNavigationLinks } from "../services/navigationData";
import ProductDetails from "../components/Product-details/ProductDetails";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  onAddToCart = () => {
    const item = { id: 1, name: "product", quantity: 1 };
    const { cartItems } = this.state;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      this.setState({ cartItems: updatedCartItems });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...item, quantity: 1 }],
      });
    }
  };

  render() {
    const { breadcrumbItems } = getNavigationLinks();
    const { cartItems } = this.state;
    return (
      <Layout cartItems={cartItems}>
        <section className="product-page">
          <div className="product-page__breadcrumb ">
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          </div>
          <Divider />
          <ProductDetails onAddToCart={this.onAddToCart} />
        </section>
        <section className="similar-products">
          <div className="similar-products__heading">
            <h2 className="similar-products__title">Similar Products</h2>
            <p className="similar-products__subtitle">
              You may like these products also
            </p>
          </div>
          <div className="similar-products__cards">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <ProductCard key={index.toString()} />
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export default ProductPage;
