import React from 'react';
import styled from 'styled-components';
import FeaturePic from '../../public/images/featured3.jpg';

const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
	url(${FeaturePic});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	opacity: 5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 10rem 1rem;

	h1 {
	font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
	margin-bottom: 1rem;
	font-size: clamp(1rem, 3vw, 2rem);
	}
`;

const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffc500;
  color: #000;
  border-radius: 2px;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

const Feature = () => {
	return (
		<FeatureContainer>
			<h1>Pizza of the Day</h1>
			<p>
				Truffle alfredo sauce topped with 24 carat gold dust.
			</p>
			<FeatureButton>Order Now</FeatureButton>
		</FeatureContainer>
	);
};

export default Feature;
