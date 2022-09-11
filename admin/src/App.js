// dependencies
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

// pages & partials
import Topbar from './partials/topbar'
import Sidebar from './partials/sidebar'
import Home from './pages/home'
import Products from './pages/products'
import CreateProduct from './pages/create-product'
import EditProduct from './pages/edit-product'
import Login from './pages/login'

// styled components
const Container = styled.div`
	display: flex;
`

// driver code
const App = () => {
	return (
		<Router>
			<Topbar />
			<Container>
				<Routes>
					<Route exact path="/" element={<><Sidebar /> <Home /></>}></Route>
					<Route exact path="/products" element={<><Sidebar /> <Products /></>}></Route>
					<Route exact path="/create-product" element={<><Sidebar /> <CreateProduct /></>}></Route>
					<Route exact path="/edit-product" element={<><Sidebar /> <EditProduct /></>}></Route>
					<Route exact path="/login" element={<Login />}></Route >
				</Routes>
			</Container>
		</Router>
	)
}

export default App
