// dependencies
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

// partials
import Footer from '../partials/footer'

// temporary data
import { products } from '../data'

// styled components
const Container = styled.div`
    width: 100%;
    margin: 20px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Icons = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    flex: 1;
    position: relative;
    min-width: calc(100% / 4);
    height: 300px;
    margin: 5px;

    &:hover ${Icons}{
        opacity: 1;
    }
`
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
`

// products driver code
const ProductList = () => {
    return (
        <Container>
            <Wrapper>
                {
                    products.map(product => {
                        return (
                            <Card>
                                <ProductImage src={product.image} />
                                <Icons>
                                    <Icon><SearchIcon /></Icon>
                                    <Icon><FavoriteBorderIcon /></Icon>
                                    <Icon><ThumbUpOffAltIcon /></Icon>
                                </Icons>
                            </Card>
                        )
                    })
                }
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default ProductList