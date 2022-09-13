// dependencies
import { React, useState } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// styled components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 50px);
    background-repeat: no-repeat;
    object-fit: cover;
    background-image: url(https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80);
    opacity: 0.9;
`

const LoginForm = styled.form`
    background-color: white;
    padding: 0px 20px 20px 20px;
    border-radius: 8px;
`

const Title = styled.h3`
    font-size: 30px;
`

const EmailInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    font-size: 15px;
    color: black;
`

const PasswordInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    font-size: 15px;
`

const Error = styled.div`
    color: red;
    margin-bottom: 10px;
`

const SubmitButton = styled.button`
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`

// login driver code
const Login = () => {
    const [email, emailSetter] = useState(null)
    const [password, passwordSetter] = useState(null)
    const { isFetching, error } = useSelector(state => state.user)

    // function to dispatch login action
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const status = await login(dispatch, { email, password })
        status && navigate('/')
    }

    return (
        <Container>
            <LoginForm>
                <Title>Login Form</Title>
                <EmailInput type="email" placeholder='Email' onChange={(e) => emailSetter(e.target.value)} />
                <PasswordInput type="password" placeholder='Password' onChange={(e) => passwordSetter(e.target.value)} />
                {error && <Error>Invalid email or password!</Error>}
                <SubmitButton type="submit" onClick={handleLogin} disabled={isFetching}>{isFetching ? "Validating" : "SIGN IN"}</SubmitButton>
            </LoginForm>
        </Container>
    )
}

export default Login