import React from "react";
import "../Header/Header.css";
import logo from "../Header/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from '../../StateProvider'
import { auth } from "../../firebase";

const Header = () => {
    const handleAunthentication = () => {
      if(user) {
        auth.signOut()
      }
    }

  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={!user && '/Login'}>
        <div onClick={handleAunthentication} className="header_option">
          <span className="header_optionLineOne">{ user  ? `Hello ${user.email}` : 'Hello & Welccome'}</span>
          <span className="header_optionLineTwo">{ user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/CheckOut">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
