import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`

const Left = styled.div``
const LogoHeadline = styled.div`
    font-size: x-large;
    font-weight: bolder;
    color: blue;
`

const Right = styled.div``
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Text = styled.p`
    padding-left: 20px;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoHeadline>Fashion Nova</LogoHeadline>
                </Left>
                <Right>
                    <IconContainer>
                        <Text>Login</Text>
                        <Text>Register</Text>
                    </IconContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar