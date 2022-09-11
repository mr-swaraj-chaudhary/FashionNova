// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// temporary data
import { product_categories } from '../data'

// styled components
const Container = styled.div`
    width: 100%;
	display: flex;
	justify-content: space-around;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex: 1;
    height: 80vh;
    min-width: calc(100% / 4);
    margin-right: 5px;
    position: relative;
`

const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
`

const Button = styled.button`
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`

// categories driver code
const Categories = () => {
    return (
        <Container>
            {
                product_categories.map(product_category => {
                    return (
                        <Card key={product_category.id}>
                            <CategoryImage src={product_category.image} />
                            <Info>
                                <Title>{product_category.title}</Title>
                                <Button><Link style={{color: "inherit", textDecoration: "none"}} to="/products">SHOP NOW</Link></Button>
                            </Info>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default Categories
