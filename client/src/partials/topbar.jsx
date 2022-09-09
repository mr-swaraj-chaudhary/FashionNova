// dependencies
import React from 'react'
import styled from 'styled-components'

// styled components
const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div``

const LogoHeadline = styled.div`
    font-size: 25px;
    font-weight: bolder;
    color: blue;
`

const Right = styled.div``

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.p`
    padding-left: 20px;
    cursor: pointer;
`

// topbar driver code
const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoHeadline>Fashion Nova</LogoHeadline>
                </Left>
                <Right>
                    <Menu>
                        <Text>Login</Text>
                        <Text>Register</Text>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar