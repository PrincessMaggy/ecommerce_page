import React from "react";
//importing assets
import cart from '../images/icon-cart.svg';
import close from '../images/icon-close.svg';
import menu from '../images/icon-menu.svg';
import avatar from '../images/image-avatar.png';
import logo from '../images/logo.svg';


const Nav = () => {
return(
    <div className="Nav">
        <div className="left">
            <img src={logo} alt="logo" />
            <a href="#" >Collections</a>
            <a href="#" > Men </a>
            <a href="#" > Women </a>
            <a href="#" > About </a>
            <a href="#" > Contact </a>
        </div>

        <div className="right">
            <img src={cart} alt="cart" />
            <img src={avatar} alt ="avatar" />
        </div>

    </div>
)



}

export default Nav;