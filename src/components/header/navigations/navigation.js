import React from "react";
import NavigationItems from "../navigations/navigationItems/navigationItems";
import Nstyle from "../navigations/navigation.css";
const Navigations = ( props ) => {
    return (
        <div className="nav nav-bar">
            <ul className={Nstyle.nav}>
                <NavigationItems link="/pizzaBuilder">Pizza Builder</NavigationItems>
                <NavigationItems link="/checkout">Checkout</NavigationItems>
            </ul>
        </div>
    );
}

export default Navigations;