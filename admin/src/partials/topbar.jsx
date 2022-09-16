// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutSuccess } from '../redux/userRedux'  // reducers

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

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Topbar = () => {
    const user = useSelector(state => state.user.currentUser)
    const admin = user ? user.isAdmin : false

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutSuccess())
        localStorage.clear()
        navigate("/")
    }

    return (
        <Container>
            <Wrapper>
                <div>
                    <LogoHeadline><Link style={{ color: "inherit", textDecoration: "none" }} to="/">Admin Panel</Link></LogoHeadline>
                </div>
                <div>
                    <Menu>
                        {
                            admin
                                ? <button style={{ border: "none", backgroundColor: "white", cursor: "pointer" }} onClick={handleLogOut}>Logout</button>
                                : <Link style={{ color: "inherit", textDecoration: "none" }} to="/login">Login</Link>
                        }
                    </Menu>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Topbar