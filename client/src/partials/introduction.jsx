import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100vw;
    padding: 0px 20px;
`

const Slide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.img`
    flex: 1;
`
const Info = styled.div`
    flex: 2;
`

const Title = styled.h1``
const Description = styled.p`
    font-size: large;
`
const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    width: 100px;
`

const Introduction = () => {
    return (
        <Container>
            <Slide>
                <ImageContainer src='https://firebasestorage.googleapis.com/v0/b/fashionnova-eb545.appspot.com/o/introduction%20girl%20image.png?alt=media&token=485b1b31-8327-4ac2-81ad-1b27b094cc2a' />
                <Info>
                    <Title>BEST SEASON SALES</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi!</Description>
                    <Button>Shop Now</Button>
                </Info>
            </Slide>
        </Container>
    )
}

export default Introduction