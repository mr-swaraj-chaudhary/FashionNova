import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Topbar from './partials/topbar'

const Container = styled.div``

const App = () => {
	return (
		<Router>
			<Container>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App