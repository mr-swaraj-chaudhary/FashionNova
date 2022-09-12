// dependencies
import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { userRequests } from '../requests'

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
`

const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`

const Email = styled.p`
    font-weight: bolder;
`

const Icon = styled.span`
    cursor: pointer;
    &:hover{
        color: lightgray;
    }
`

// users widget driver code
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const response = await userRequests.get("/users?new=true")
            setUsers(response.data)
        }

        getUsers()
    }, [])

    return (
        <Container>
            <Wrapper>
                <Title>Recent Users</Title>
                <UserContainer>
                    {
                        users.map(user => {
                            return (
                                <UserRow key={user._id}>
                                    <ProfileImage src={user.image} />
                                    <Email>{user.email}</Email>
                                    <Icon><RemoveRedEyeIcon /></Icon>
                                </UserRow>
                            )
                        })
                    }
                </UserContainer>
            </Wrapper>
        </Container>
    )
}

export default Users