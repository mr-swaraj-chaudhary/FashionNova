// dependencies
import { React, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginStart, loginFailure, loginSuccess } from '../redux/userRedux' // user reducers
import { publicRequests } from '../requests' // request methods

// styling components
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

const Form = styled.form`
    background-color: white;
    padding: 0px 20px 20px 20px;
    border-radius: 8px;
`

const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    font-size: 15px;
    color: black;
`

const Error = styled.div`
    color: red;
    margin-bottom: 10px;
`

const Button = styled.button`
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`

const Login = () => {
    // login creds
    const [email, emailSetter] = useState(null)
    const [password, passwordSetter] = useState(null)
    const { isFetching, error } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // login action
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            dispatch(loginStart())
            const response = await publicRequests.post("/account/login/", { email, password })
            if (response.data.isAdmin) {
                dispatch(loginSuccess(response.data))
                navigate('/')
            } else {
                dispatch(loginFailure())
            }
        }catch(error){
            dispatch(loginFailure())
        }
    }

    return (
        <Container>
            <Form>
                <h1>Welcome Back</h1>
                <Input type="email" placeholder='Email' onChange={(e) => emailSetter(e.target.value)} />
                <Input type="password" placeholder='Password' onChange={(e) => passwordSetter(e.target.value)} />
                {error && <Error>Invalid email or password!</Error>}
                <Button type="submit" onClick={handleLogin} disabled={isFetching}>{isFetching ? "Validating" : "SIGN IN"}</Button>
            </Form>
        </Container>
    )
}

export default Login