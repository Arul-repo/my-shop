import React from "react";
import BCstyle from "../buildcontrols/buildcontrols.css";
import BuildItem from "../buildcontrols/builditem/builditem";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" }
];

const BuildControls = ( props ) => {
    return (
        <div className={BCstyle.buildcontrols}>
            <div className="unknownPrice"><label>Pizza Price : Rs. </label>{props.itemPrice}</div> 
            {controls.map(( cntrls ) => {
                return <BuildItem 
                        key={cntrls.label} 
                        label={cntrls.label} 
                        removed={() => props.removeIng(cntrls.type)} 
                        added={() => props.addIng(cntrls.type)}
                        disabled={props.disabled[cntrls.type]} />
            })}
            <button className={BCstyle.orderNow} disabled={!props.orderBtn} onClick={props.placeOrder}>ORDER NOW</button> 
        </div>
    )
}

export default BuildControls;