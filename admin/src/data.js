const categories = ["men", "women", "popular", "summer", "winter", "shoes"]
const colors = ["red", "blue", "black", "white", "orange", "green"]
const sizes = ["S", "M", "L", "XL", "XXL"]

const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        title: "MEN PRODUCTS",
        category: "men",
        price: 30,
        inStock: true
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "WOMEN PRODUCTS",
        category: "women",
        price: 60,
        inStock: true
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "DESIGNER SHOES",
        category: "shoes",
        price: 90,
        inStock: false
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        title: "MEN PRODUCTS",
        category: "men",
        price: 30,
        inStock: true
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "WOMEN PRODUCTS",
        category: "women",
        price: 60,
        inStock: true
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "DESIGNER SHOES",
        category: "shoes",
        price: 90,
        inStock: false
    },
];

export { categories, colors, sizes, active_users, products }