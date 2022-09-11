const router = require('express').Router()
const PRODUCT = require('../models/product.model')
const { verifyAdmin } = require('./verify')

const dotenv = require('dotenv')
dotenv.config()

// find all products (everyone)
router.get("/", (req, res) => {
    PRODUCT.find()
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json("There was some problem finding the products") })
})

// find a specific product (everyone)
router.get("/find/:id", (req, res) => {
    PRODUCT.findById(req.params.id)
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(`There was some problem finding the product with id : ${req.params.id}`) })
})

// add product (admin only)
router.post("/create", verifyAdmin, (req, res) => {
    const product = new PRODUCT(req.body)

    product.save()
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(error) })
})

// delete a specific product (admin only)
router.delete("/delete/:id", verifyAdmin, (req, res) => {
    PRODUCT.findByIdAndDelete(req.params.id)
        .then((result) => { res.status(200).json("Product was successfully deleted") })
        .catch((error) => { res.status(500).json(`There was some problem deleting the product with id : ${req.params.id}`) })
})

// update product profile (admin only)
router.put("/update/:id", verifyAdmin, (req, res) => {
    PRODUCT.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((result) => { res.status(200).json(result) })
        .catch((error) => { res.status(500).json(`There was some problem updating your profile`) })
})

module.exports = router