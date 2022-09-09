// dependencies
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login'
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

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Icon = styled.div`
    padding-left: 20px;
    cursor: pointer;
`

// topbar driver code
const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoHeadline>Admin Panel</LogoHeadline>
                </Left>
                <Right>
                    <Icons>
                        <Icon><SettingsIcon /></Icon>
                        <Icon><PersonIcon /></Icon>
                        <Icon><LoginIcon /></Icon>
                    </Icons>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar