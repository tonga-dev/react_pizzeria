import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;


const Navbar = () => {
	return (
		<Nav>
			<NavLink to="/">Pizza</NavLink>
			<NavIcon onClick={toggle}>
				<p>Menu</p>
				<Bars />
			</NavIcon>
		</Nav>
	)
}

export default Navbar;
