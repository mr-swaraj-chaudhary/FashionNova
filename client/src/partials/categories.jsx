import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'

const Container = styled.div`
    width: 100%;
    padding: 20px;
	display: flex;
	justify-content: space-around;
`

const Card = styled.div`
    flex: 1;
    height: 80vh;
    margin: 10px;
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

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => {
                    return (
                        <Card key={item.id}>
                            <CategoryImage src={item.image} />
                            <Info>
                                <Title>{item.title}</Title>
                                <Button>SHOP NOW</Button>
                            </Info>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default Categories
