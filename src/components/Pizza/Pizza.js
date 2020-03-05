import React from "react";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";
import Pstyle from "../Pizza/pizza.css";

const Pizza = ( props ) => {
    let ingredientFromState = Object.keys(props.ingredients)
    .map((inKey) => {
        return [...Array(props.ingredients[inKey])].map(( _, x ) => {
            return <PizzaIngredient key={inKey + x} type={inKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if(ingredientFromState.length <= 0) {
        ingredientFromState = <p>Topup ingredient to your Pizza</p>;
    }
    return (

        <React.Fragment>
            <div className={Pstyle.pizza}> 
                <PizzaIngredient type="bread-top" />
                {ingredientFromState}
                <PizzaIngredient type="bread-bottom" />
            </div>
        </React.Fragment>

    );
}

export default Pizza;