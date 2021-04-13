import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../../public/images/pizza-3.jpg';

const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${BackgroundImage});
	height: 100vh;
	background-position: center;
	background-size: cover;
`;

const HeroContent = styled.div`
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);	
`;

const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: 300;

	@media screen and (max-width: 650px) {
	width: 100%;
	}
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  border-radius: 2px;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Pizza Ever</HeroH1>
					<HeroP>Ready in the Speed of Light</HeroP>
					<HeroBtn>
						Order Now
					</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	)
}

export default Hero;