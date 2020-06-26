import React from 'react';


const SelectOptions = ({ item, active, setSelected }) => (
	<div
		className={`item ${active ? 'active' : ''}`}
		onClick={() => setSelected(item)}

	>
		{item.name}
	</div>
);


export default SelectOptions;