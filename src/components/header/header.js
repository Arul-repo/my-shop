import React from "react";
import { BrowserRouter, Link /* , NavLink */ } from "react-router-dom";
import Hstyle from "../header/header.css";
import Navigations from "../header/navigations/navigation";

const Header = ( props ) => {
    return(
        <BrowserRouter>
            <header>
                <div className={Hstyle.mainRow}>
                    <div className={Hstyle.mainLeft}>
                        <Link to="/" className={Hstyle.logo}>A</Link>
                    </div>
                    <div className={Hstyle.mainRig}>
                        <Link to="/Login" className={Hstyle.login}>SIGN IN</Link>
                        <Link to="/Member" className={Hstyle.member}>Be a member</Link>
                    </div>
                </div>
                <div className={Hstyle.secRow}><Navigations /></div>
            </header>
        </BrowserRouter>
    );
}

export default Header;