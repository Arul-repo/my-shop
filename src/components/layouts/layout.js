import React from "react";
import Lstyle from "./layout.css";

const Layout = ( props ) => {
    return (
        <React.Fragment>
            <div className={Lstyle.LayContainer}>
                {props.children}
            </div>
            {/* <div> ToolBar Components, SideBar components, BackDrop components {props.name} </div> */}
        </React.Fragment>
    );
}

export default Layout;