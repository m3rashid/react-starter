import React from 'react'
import Home from 'pages/home'
import NotFound from 'pages/404'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
