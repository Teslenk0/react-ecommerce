import React from "react";

//Router
import { Link } from "react-router-dom";

//Firebase
import { auth } from "../../firebase/firebase.utils";

//Styles and image
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

//Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// REDUX - higher order componen HOC
import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>

    {//if hidden is true, render nothing, if false render the dropdown
    hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
