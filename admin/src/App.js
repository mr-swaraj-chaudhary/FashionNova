import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from './partials/topbar'
import Sidebar from './partials/sidebar'
import Home from './pages/home'
import Products from './pages/products'

const Container = styled.div`
	display: flex;
`

const App = () => {
	return (
		<Router>
			<Topbar />
			<Container>
				<Routes>
					<Route path="/" element={<><Sidebar /> <Home /></>}></Route>
					<Route path="products" element={<><Sidebar /> <Products /></>}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App
