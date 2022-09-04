import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from './partials/topbar'
import Sidebar from './partials/sidebar'
import Home from './pages/home'

const Container = styled.div`
	display: flex;
`

const Wrapper = styled.div``

const App = () => {
	return (
		<Router>
			<Topbar />
			<Container>
				<Routes>
					<Route path="/" element={<><Sidebar /> <Home /></>}></Route>
				</Routes>
			</Container>
		</Router>
	)
}

export default App
