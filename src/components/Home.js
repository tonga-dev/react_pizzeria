import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';
import Hero from './Hero';
import Products from './Products';
import Feature from './Feature';
import { productData, productDataTwo } from '../data';

const Home = () => {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading="Choose your favorite" data={productData} />
			<Feature />
			<Products heading="Sweet Treats for You" data={productDataTwo} />
		</Router>
	);
}
export default Home;