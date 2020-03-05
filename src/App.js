import React, { Component } from 'react';
import Layout from "./components/layouts/layout";
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Header from "./components/header/header";
import Footer from './components/footer/footer';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Header />
					<PizzaBuilder />
					<Footer />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
