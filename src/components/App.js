// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ItemList />} />
				<Route path="/item/:id" element={<ItemDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
