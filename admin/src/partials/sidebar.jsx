import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    padding-left: 20px;
`

const Menu = styled.div``
const Title = styled.h3``
const SideList = styled.ul`
    list-style: none;
    width: 50%;
`
const ListItem = styled.li`
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
    }
`

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <SideList>
                        <ListItem>Home</ListItem>
                        <ListItem>Products</ListItem>
                        <ListItem>New Product</ListItem>
                        <ListItem>Users</ListItem>
                    </SideList>
                </Menu>
                <Menu>
                    <Title>Quick Links</Title>
                    <SideList>
                        <ListItem>Settings</ListItem>
                        <ListItem>Mail</ListItem>
                        <ListItem>Feedback</ListItem>
                        <ListItem>Report</ListItem>
                    </SideList>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <SideList>
                        <ListItem>Transactions</ListItem>
                        <ListItem>Staffs</ListItem>
                        <ListItem>Projects</ListItem>
                        <ListItem>Problems</ListItem>
                    </SideList>
                </Menu>
                <Menu>
                    <Title>Management</Title>
                    <SideList>
                        <ListItem>Mail</ListItem>
                        <ListItem>Feedback</ListItem>
                        <ListItem>Messages</ListItem>
                    </SideList>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar