import React from "react";

const navigationItems = ( props ) => {
    return (
        <li><a href={props.link}>{props.children}</a></li>
    );
}

export default navigationItems;