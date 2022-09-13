// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import styled from 'styled-components'

// styling components
const Container = styled.div`
    width: 100vw;
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

const LogoHeadline = styled.div`
    font-size: 25px;
    font-weight: bolder;
    color: blue;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Icon = styled.div`
    padding-left: 20px;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    <LogoHeadline><Link style={{ color: "inherit", textDecoration: "none" }} to="/">Admin Panel</Link></LogoHeadline>
                </div>
                <div>
                    <Icons>
                        <Icon><Link style={{ color: "inherit", textDecoration: "none" }} to="/login"><LoginIcon /></Link></Icon>
                    </Icons>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Topbar