// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
	{ id: '1', name: 'Item 1', description: 'Description of Item 1' },
	{ id: '2', name: 'Item 2', description: 'Description of Item 2' },
	{ id: '3', name: 'Item 3', description: 'Description of Item 3' },
];

function ItemDetail() {
	const { id } = useParams();
	const item = items.find(item => item.id === id);

	if (!item) {
		return <h2>Item not found</h2>;
	}

	return (
		<div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
		</div>
	);
}

export default ItemDetail;
