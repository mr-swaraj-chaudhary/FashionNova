// account router
const router = require('express').Router()
const cryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const USER = require('../models/user.model')

const dotenv = require('dotenv')
dotenv.config()

router.post('/register', (req, res) => {
    const user = new USER({
        email: req.body.email,
        name: req.body.name.toLowerCase(),
        isAdmin: req.body.isAdmin,
        image: req.body.image,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.AES_KEY).toString()
    })

    user.save()
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(error) })
})

router.post('/login', (req, res) => {
    USER.findOne({ email: req.body.email })
        .then((result) => {
            if (!result) {
                res.status(400).json("Email not registered")
            } else {
                const savedPassword = cryptoJS.AES.decrypt(result.password, process.env.AES_KEY).toString(cryptoJS.enc.Utf8)
                if (savedPassword !== req.body.password) {
                    res.status(400).json("Incorrect password")
                } else {
                    const { password, ...details } = result._doc
                    const accessToken = jwt.sign({
                        id: result._id,
                        isAdmin: result.isAdmin
                    }, process.env.JWT_KEY, { expiresIn: "3d" })
                    res.status(200).json({ ...details, accessToken })
                }
            }
        })
        .catch((error) => { res.status(500).json(error) })
})

module.exports = router