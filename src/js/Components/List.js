import React, { Fragment } from 'react';

function List({ As = Fragment, items, renderItems, ...props }) {

	return (
		<As {...props}>{items ? items.map(renderItems) : 'fething items...'}
		</As>
	);
}

export default List;
