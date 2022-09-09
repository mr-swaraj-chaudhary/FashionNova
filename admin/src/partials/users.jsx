// dependencies
import React from 'react'
import styled from 'styled-components'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// styled components
const Container = styled.div`
    flex: 1;
    margin-right: 20px;
    padding: 0px 10px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Wrapper = styled.div``
const Title = styled.h3``
const UserContainer = styled.div``

const UserRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 5px;
`

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Email = styled.p``

const Icon = styled.span`
    cursor: pointer;
    &:hover{
        color: lightgray;
    }
`

// users widget driver code
const Users = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Recent Users</Title>
                <UserContainer>
                    <UserRow>
                        <ProfileImage src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
                        <Email>swaraj@gmail.com</Email>
                        <Icon><RemoveRedEyeIcon /></Icon>
                    </UserRow>
                    <UserRow>
                        <ProfileImage src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
                        <Email>swaraj@gmail.com</Email>
                        <Icon><RemoveRedEyeIcon /></Icon>
                    </UserRow>
                </UserContainer>
            </Wrapper>
        </Container>
    )
}

export default Users