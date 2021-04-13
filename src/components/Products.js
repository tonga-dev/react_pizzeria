import React from 'react'
import styled from 'styled-components';

const ProductsContainer = styled.div`
  // width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 330px;
`;

const ProductImg = styled.img`
  height: 300px;
  min-width: 330px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  border-radius: 2px;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;



const Products = ({ heading, data }) => {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductWrapper>
				{data.map((product, key) => {
					return (
						<ProductCard key={key}>
							<ProductImg src={product.img} alt={product.alt}
							/>
							<ProductInfo>
								<ProductTitle>{product.name}</ProductTitle>
								<ProductDesc>{product.desc}</ProductDesc>
								<ProductPrice>{product.price}</ProductPrice>
								<ProductButton>{product.button}</ProductButton>
							</ProductInfo>
						</ProductCard>
					)
				})}
			</ProductWrapper>
		</ProductsContainer>
	)
}

export default Products;