import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
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
    padding: 5px 25px;
`

const Left = styled.div``
const LogoHeadline = styled.div`
    font-size: x-large;
    font-weight: bolder;
    color: black;
`

const Right = styled.div``
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const IconItem = styled.div`
    padding-left: 20px;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoHeadline>Admin Dashboard</LogoHeadline>
                </Left>
                <Right>
                    <IconContainer>
                        <IconItem><SettingsIcon /></IconItem>
                        <IconItem><PersonIcon /></IconItem>
                        <IconItem><LoginIcon /></IconItem>
                    </IconContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar