import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./header.styles.scss";

const Header = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="header">
      <div>
        <img
          className="img-container"
          src="static/images/logo.png"
          alt="Sabka Bazaar logo"
        />
      </div>

      <div className="header__links">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/PLP">Products</Link></span>
      </div>
      <div className="header__cartIcon">
        <div className="header__options">
          <span><Link to="/login">Sign In</Link></span>
          <span><Link to="/register">Register</Link></span>
        </div>
        <div className="cartIcon" onClick={toggleCartHidden}>
          <div className="cartDisplayContent">
            <img src="static/images/cart.svg" alt="cartSvg" />{" "}
            {itemCount ? (
              <span>{itemCount} item</span>
            ) : (
              <span>{itemCount} items</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
