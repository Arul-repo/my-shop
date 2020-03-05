import React from "react";

const OrderSummary = props => {
    const ingrediant = Object.keys(props.ingrediants)
    .map( iKey =>{
        return <li key={iKey}>{iKey} - {props.ingrediants[iKey]}</li>
    })

    return ( 

        <React.Fragment>
            <ul>{ingrediant}</ul>
            <p><strong>Total Price: {props.totalprice}</strong></p> 
        </React.Fragment>
    
    );
}

export default OrderSummary;