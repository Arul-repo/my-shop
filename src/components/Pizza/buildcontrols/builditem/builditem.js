import React from "react";
import Bstyle from "../builditem/builditem.css";

const Builditem = ( props ) => {

    return ( 
        <React.Fragment>
            <div className={Bstyle.BuildControl}>
                <div className={Bstyle.Label}>{props.label}</div>
                <button className={Bstyle.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>Less</button>
                
                <button className={Bstyle.More} 
                onClick={props.added}>More</button>
            </div>
        </React.Fragment>
    );
    
}

export default Builditem;