import React from "react";
import Bstyle from "../Buttons/Buttons.css";

/* const newvar = {[Bstyle.btn, Bstyle[props.btnType]].join('')}; */
const Buttons = ( props ) =>{

    return(
        <React.Fragment>
            <button 
            className={[Bstyle.btn, Bstyle[props.btnType]].join(' ')}
            onClick = {props.clicked} >
                {props.children}
            </button>
        </React.Fragment>
    )

}

export default Buttons;