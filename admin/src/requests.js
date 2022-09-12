import axios from 'axios'

// admin token
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI4ODY1NjgyMTNkYzM3MTIyZGE5NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzAwMjczOCwiZXhwIjoxNjYzMjYxOTM4fQ.FXODltfzhbvR6IBS6L6CtEqQbZxt9Hez7AqXVcNfgQE"

// axios object for public resources
const publicRequests = axios.create({
    baseURL: "http://localhost:5000/apis"
})

// axios object for admin controlled resources
const userRequests = axios.create({
    baseURL: "http://localhost:5000/apis",
    headers: {
        token: `Bearer ${TOKEN}`
    }
})

export { publicRequests, userRequests }