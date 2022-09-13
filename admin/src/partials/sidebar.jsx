// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// styling components
const Container = styled.div`
    flex: 1;
    margin: 0px 40px 0px 20px;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    <h3>Dashboard</h3>
                    <Ul>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/">Home</Link></Li>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/products">Products</Link></Li>
                        <Li><Link style={{color: "inherit", textDecoration: "none"}} to="/create-product">Create Product</Link></Li>
                    </Ul>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <Ul>
                        <Li>Settings</Li>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Report</Li>
                    </Ul>
                </div>
                <div>
                    <h3>Notifications</h3>
                    <Ul>
                        <Li>Transactions</Li>
                        <Li>Staffs</Li>
                        <Li>Projects</Li>
                        <Li>Problems</Li>
                    </Ul>
                </div>
                <div>
                    <h3>Management</h3>
                    <Ul>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Messages</Li>
                    </Ul>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Sidebar