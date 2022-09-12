import axios from 'axios'
const BASE_URL = "http://localhost:5000/apis"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI4ODY1NjgyMTNkYzM3MTIyZGE5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk4OTE3OCwiZXhwIjoxNjYzMjQ4Mzc4fQ.2SRjmv8Eji_L4TsGAbm7WJNgxhJ1w1hQ6iC9hXoNYq0"

// axios object for public resources
const publicRequests = axios.create({
    baseURL: BASE_URL
})

// axios object for admin controlled resources
const userRequests = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})

export { publicRequests, userRequests }