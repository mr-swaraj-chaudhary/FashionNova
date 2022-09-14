const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    colors: {
        type: Array,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema)