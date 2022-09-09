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
					<Route path="/" element={<><Sidebar /> <Home /></>}></Route>
					<Route path="/products" element={<><Sidebar /> <Products /></>}></Route>
					<Route path="/create-product" element={<><Sidebar /> <CreateProduct /></>}></Route>
					<Route path="/edit-product" element={<><Sidebar /> <EditProduct /></>}></Route>
					<Route path="/login" element={<EditProduct />}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App
