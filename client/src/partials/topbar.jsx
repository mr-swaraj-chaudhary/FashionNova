// dependencies
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                    <LogoHeadline><Link style={{color: "inherit", textDecoration: "none"}} to="/">Fashion Nova</Link></LogoHeadline>
                </Left>
                <Right>
                    <Menu>
                        <Text><Link style={{color: "inherit", textDecoration: "none"}} to="/login">Login</Link></Text>
                        <Text><Link style={{color: "inherit", textDecoration: "none"}} to="/register">Register</Link></Text>
                    </Menu>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar