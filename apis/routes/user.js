const router = require('express').Router()
const cryptoJS = require('crypto-js')
const USER = require('../models/user.model')
const { verifyToken, verifyUser, verifyAdmin } = require('./verify')

const dotenv = require('dotenv')
dotenv.config()

// find all users
router.get("/", verifyAdmin, (req, res) => {
    USER.find()
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json("There was some problem finding the users") })
})

// find a specific user
router.get("/find/:id", verifyAdmin, (req, res) => {
    USER.findById(req.params.id)
        .then((result) => {
            const { password, ...details } = result._doc
            res.status(200).json({ ...details })
        })
        .catch((error) => { res.status(500).json(`There was some problem finding the user with id : ${req.params.id}`) })
})

// delete a specific user
router.delete("/delete/:id", verifyAdmin, (req, res) => {
    USER.findByIdAndDelete(req.params.id)
        .then((result) => { res.status(200).json("User was successfully deleted") })
        .catch((error) => { res.status(500).json(`There was some problem deleting the user with id : ${req.params.id}`) })
})

// update profile
router.put("/update/:id", verifyUser, (req, res) => {
    USER.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(`There was some problem updating your profile`) })
})

module.exports = router