import React from "react";
import PropTypes from "prop-types";
import PIstyle from "../PizzaIngredient/PizzaIngredient.css";

class PizzaIngredient extends React.Component {
    render (){

        let ingredient = null;
        switch ( this.props.type ){
        case ( 'bread-top' ):
            ingredient = (
                <div className={PIstyle.BreadTop}>
                    <div className={PIstyle.Seeds1}></div>
                    <div className={PIstyle.Seeds2}></div>
                </div>
            );
        break;
        case ( 'meat' ):
            ingredient = <div className={PIstyle.Meat}></div>;
        break;
        case ( 'cheese' ):
            ingredient = <div className={PIstyle.Cheese}></div>;
        break;
        case ( 'salad' ):
            ingredient = <div className={PIstyle.Salad}></div>;
        break;
        case ( 'bacon' ):
            ingredient = <div className={PIstyle.Bacon}></div>;
            break;
        case ( 'bread-bottom' ):
            ingredient = <div className={PIstyle.BreadBottom}></div>;
        break;
            default:
            ingredient = null;
            break;
        }
        return ingredient;
    }
};

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default PizzaIngredient;