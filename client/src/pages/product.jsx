// dependencies
import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

// partials
import Footer from '../partials/footer'

// styled components
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
    font-size: 20px;
    line-height: 25px;
`
const Price = styled.h2``

const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.p``

const Colors = styled.div`
    display: flex;
    justify-content: start;
`

const Color = styled.span`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 50%;
    margin-right: 5px;
`

const SizeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Sizes = styled.select`
    width: 20%;
    padding: 5px;
`

const Size = styled.option`
    padding: 5px;
`

const AmountContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Amount = styled.p`
    padding-right: 10px;
    font-size: 20px;
    color: black;
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

const Button = styled.button`
    color: black;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    padding: 8px;
`

// product
const product = {
    id: 1,
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    title: "MEN PRODUCTS",
    price: 30,
    inStock: false,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam officia, asperiores distinctio pariatur velit delectus exercitationem itaque cumque similique!",
    color: ["red", "blue"],
    size: ["S", "L"],
    category: ["popular", "men"]
}

// product driver code
const Product = () => {
    return (
        <Container>
            <Wrapper>
                <ProductImage src={product.image} />
                <Info>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>{product.price} INR</Price>

                    <ColorContainer>
                        <Text>Available Colors</Text>
                        <Colors>
                            {
                                product.color.map(curr_color => {
                                    return (
                                        <Color color={curr_color}></Color>
                                    )
                                })
                            }
                        </Colors>
                    </ColorContainer>

                    <SizeContainer>
                        <Text>Available Sizes</Text>
                        <Sizes>
                            {
                                product.size.map(curr_size => {
                                    return (
                                        <Size value={curr_size}>{curr_size}</Size>
                                    )
                                })
                            }
                        </Sizes>
                    </SizeContainer>

                    <AmountContainer>
                        <Text>Select Quantity</Text>
                        <AddContainer>
                            <Icon><RemoveIcon /></Icon>
                            <Amount>2</Amount>
                            <Icon><AddIcon /></Icon>
                        </AddContainer>
                        <Button>ADD TO CART</Button>
                    </AmountContainer>
                </Info>
            </Wrapper>
        </Container>
    )
}

export default Product