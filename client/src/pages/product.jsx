import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Container = styled.div`
    padding: 20px;
`
const Wrapper = styled.div`
    display: flex;
`

const ProductImage = styled.img`
    flex: 1;
    width: 100%;
    height: 70vh;
    object-fit: cover;
`

const Info = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 600;
`
const Description = styled.p`
    line-height: 25px;
`
const Price = styled.h2`
    font-size: 40px;
`
const AmountContainer = styled.div`
    display: flex;
`
const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`
const Icon = styled.div`
    color: black;
    cursor: pointer;
    padding-right: 10px;
`
const Amount = styled.h2`
    padding-right: 10px;
`
const Button = styled.button`
    padding: 10px 30px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: bolder;
`

const Product = () => {
    return (
        <Container>
            <Wrapper>
                <ProductImage src='https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'/>
                <Info>
                    <Title>MEN SHIRT</Title>
                    <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio corrupti minima iusto! Voluptate consequatur assumenda, tempore soluta voluptatem repudiandae ipsum minus laboriosam quos culpa praesentium sapiente alias vel hic eveniet.</Description>
                    <Price>$ 40</Price>
                    <AmountContainer>
                        <AddContainer>
                            <Icon><AddIcon /></Icon>
                            <Amount>2</Amount>
                            <Icon><RemoveIcon /></Icon>
                        </AddContainer>
                        <Button>ADD TO CART</Button>
                    </AmountContainer>
                </Info>
            </Wrapper>
        </Container>
    )
}

export default Product