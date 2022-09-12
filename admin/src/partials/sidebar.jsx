// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// styled components
const Container = styled.div`
    flex: 1;
    margin: 0px 40px 0px 20px;
    height: calc(100vh - 50px);
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Menu = styled.div``

const Title = styled.h4`
    font-size: 20px;
`

const Ul = styled.ul`
    list-style: none;
    width: 75%;
`

const Li = styled.li`
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
    &:hover{
        background-color: lightgray;
    }
`

// sidebar driver code
const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <Ul>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/">Home</Link></Li>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/products">Products</Link></Li>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/create-product">Create Product</Link></Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Quick Links</Title>
                    <Ul>
                        <Li>Settings</Li>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Report</Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <Ul>
                        <Li>Transactions</Li>
                        <Li>Staffs</Li>
                        <Li>Projects</Li>
                        <Li>Problems</Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Management</Title>
                    <Ul>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Messages</Li>
                    </Ul>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar