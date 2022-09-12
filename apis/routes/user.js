const router = require('express').Router()
const cryptoJS = require('crypto-js')
const USER = require('../models/user.model')
const { verifyUser, verifyAdmin } = require('./verify')

const dotenv = require('dotenv')
dotenv.config()

// find all users (admin only)
router.get("/", verifyAdmin, (req, res) => {
    const users = req.query.new ? USER.find().sort({ _id: -1 }).limit(5) : USER.find()
    users
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json("There was some problem finding the users") })
})

// find a specific user (admin only)
router.get("/find/:id", verifyAdmin, (req, res) => {
    USER.findById(req.params.id)
        .then((result) => {
            const { password, ...details } = result._doc
            res.status(200).json({ ...details })
        })
        .catch((error) => { res.status(500).json(`There was some problem finding the user with id : ${req.params.id}`) })
})

// delete a specific user (admin only)
router.delete("/delete/:id", verifyAdmin, (req, res) => {
    USER.findByIdAndDelete(req.params.id)
        .then((result) => { res.status(200).json("User was successfully deleted") })
        .catch((error) => { res.status(500).json(`There was some problem deleting the user with id : ${req.params.id}`) })
})

// update user profile (user only)
router.put("/update/:id", verifyUser, (req, res) => {
    if (req.body.password) {
        req.body.password = cryptoJS.AES.encrypt(req.body.password, process.env.AES_KEY).toString()
    }
    USER.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(`There was some problem updating your profile`) })
})

// user statistics for previous one year
router.get("/stats", verifyAdmin, (req, res) => {
    const currDate = new Date()
    const currDateLastYear = new Date(currDate.setFullYear(currDate.getFullYear() - 1)) // today in last year

    USER.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: currDateLastYear
                }
            }
        },
        {
            $project: {
                month: {
                    $month: "$createdAt"
                }
            }
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: 1 }
            }
        }
    ])
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json("There was some fetching user stats") })
})

module.exports = router