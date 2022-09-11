// dependencies
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages & partials
import Topbar from './partials/topbar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import ProductList from './pages/product-list'
import Product from './pages/product'

// styled components
const Container = styled.div``

// driver code
const App = () => {
	return (
		<Router>
			<Container>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/products" element={<ProductList />}></Route>
					<Route path="/product" element={<Product />}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App