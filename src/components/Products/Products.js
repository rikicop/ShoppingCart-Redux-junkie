import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";
//This is Product component that is called inside Products component
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

//shop is defined in src/redux/store.js as a property of the reducer from combineReducers
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
