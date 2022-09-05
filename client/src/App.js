import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Topbar from './partials/topbar'
import Login from './pages/login'

const Container = styled.div``

const App = () => {
	return (
		<Router>
			<Container>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="login" element={<Login />}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App