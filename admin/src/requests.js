// dependencies
import axios from 'axios'

// admin token
const TOKEN = localStorage.getItem("persist:root") && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken

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