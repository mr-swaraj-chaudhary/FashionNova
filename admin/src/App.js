import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './partials/topbar'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Topbar />}></Route>
			</Routes>
		</Router>
	)
}

export default App
