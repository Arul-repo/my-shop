import React from "react";
import BDstyle from "../Backdrop/Backdrop.css";

const Backdrop = props => {
    const close = {
        float: "right",
        fontSize:"1.5rem",
        fontWeight:"700",
        lineHeight:"1",
        color:"#000",
        textShadow:"0 1px 0 #fff",
        opacity:".5"
    }
    return ( 
        <React.Fragment>
            <div>
            {props.show ? <span className={BDstyle.Backdrop} style ={close} 
            onClick={props.closeModal}>×</span>: null}
            </div>
        </React.Fragment>
    );
}

export default Backdrop;