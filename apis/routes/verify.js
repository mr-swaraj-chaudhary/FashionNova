const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// verify token
const verifyToken = (req, res, next) => {
    const authHeaders = req.headers.token
    if (!authHeaders) {
        res.status(400).json("No authentication headers were found")
    } else {
        const token = authHeaders.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if (error) {
                res.status(400).json("Token invalid")
            } else {
                req.user = result
                next()
            }
        })
    }
}

// verify user
const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.params.id) {
            next()
        } else {
            res.status(400).json("Unauthorized access")
        }
    })
}

// verify admin
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(400).json("Unauthorized access")
        }
    })
}

export { verifyToken, verifyUser, verifyAdmin }