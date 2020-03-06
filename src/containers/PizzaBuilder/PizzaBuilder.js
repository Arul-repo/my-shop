import React from "react";
import Auxiliary from "../../hoc/auxiliary";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/buildcontrols/buildcontrols";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Button from "../../components/UI/Buttons/Buttons";
import axios from "../../axiosInstance";
import Spinner from "../../components/UI/spinner/Spinner";

const INGREDIENT_PRICE = {
    salad: 10,
    cheese: 14,
    bacon: 12,
    meat: 20
}

const buttonFooter = {
    display: "flex",
    flexFlow: "row-reverse",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "flex-end"
}

class PizzaBuilder extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 30,
        orderNow: false,
        orderSum: false,
        loading: false,
        errorHappen: false
    }
    componentDidMount() {
        axios.get("/ingredients")
        .then(response => {
            this.setState({ingredients: response.data});
        }).catch( error => {
            this.setState({errorHappen: true});
        });
    }
    addIngredients = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateStateIng = {...this.state.ingredients};
        updateStateIng[type]= updateCount;
        const oldTotalPrice = this.state.totalPrice;
        const IngPrice = INGREDIENT_PRICE[type];
        const updateTotalPrice = oldTotalPrice + IngPrice;
        this.setState({
            ingredients: updateStateIng,
            totalPrice: updateTotalPrice
        });
        this.orderNowfunction(updateStateIng);
    }
    orderNowfunction = updateStateIng => {
        const getCount = Object.keys({...updateStateIng})
        .map(iKey => {
            return updateStateIng[iKey];
        })
        .reduce((sum, el) => {
            return (sum + el) > 0
        });
        this.setState({
            orderNow: getCount
        })
    }
    removeIngredients = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){ return; }
        const updateCount = oldCount - 1;
        const updateStateIng = {...this.state.ingredients};
        updateStateIng[type]= updateCount;
        const oldTotalPrice = this.state.totalPrice;
        const IngPrice = INGREDIENT_PRICE[type];
        const updateTotalPrice = oldTotalPrice - IngPrice;
        this.setState({
            ingredients: updateStateIng,
            totalPrice: updateTotalPrice
        });
        this.orderNowfunction(updateStateIng);
    }
    placeOrderItem = () => {
        this.setState({
            orderSum:true
        }) 
    }
    closeModal = () => {
        this.setState({
            orderSum:false
        })
    }
    continue = () => {
        this.setState({ loading: true });
        const postdata = {
            ingredient: this.state.ingredients,
            totalprice: this.state.totalPrice,
            customer:{
                name: "Arul",
                address: {
                    no: "120B",
                    street: "Erikarai St",
                    landmark: "Erikarai",
                    location: "Medavakkam",
                    city: "chennai",
                    state: "TN",
                    country: "INDIA"
                },
                email: "test@123.com"
            }
        };
        axios.post("/orders.json", postdata)
        .then(response => {
            this.setState({ loading: false });
            this.closeModal();
        })
        .catch(error => {
            this.setState({ loading: false });
        });
    }
    render(){
        const checkIngredient = {...this.state.ingredients};

        for(let key in checkIngredient){
            checkIngredient[key] = checkIngredient[key] <= 0
        }
        let orderSummary = null;
        let PizzaMaker = <Spinner />;
        if(this.state.ingredients){
            PizzaMaker = <React.Fragment>
                        <Pizza ingredients={this.state.ingredients} />
                        <BuildControls 
                        removeIng={this.removeIngredients}
                        addIng={this.addIngredients}
                        disabled={checkIngredient} 
                        itemPrice = {this.state.totalPrice}
                        orderBtn = {this.state.orderNow}
                        placeOrder = {this.placeOrderItem} />
            </React.Fragment>
            orderSummary = <React.Fragment>
                        <OrderSummary ingrediants={this.state.ingredients} totalprice={this.state.totalPrice}/>
                        <div style={buttonFooter}>
                            <Button btnType="cancel" clicked={this.closeModal}>Cancel</Button>
                            <Button btnType="success" clicked={this.continue}>Continue</Button>
                        </div>
            </React.Fragment>
        }
        if(this.state.loading){
            orderSummary = this.state.errorHappen? <p className="errorMsg">Error</p> : <Spinner />;
        }
        return (
            <Auxiliary>
                <Modal show={this.state.orderSum} closeModal ={this.closeModal} cancel={this.props.cancel} continue={this.props.continue} >
                    {orderSummary}
                </Modal>
                {PizzaMaker}
            </Auxiliary>
        );
    }
}

export default PizzaBuilder;