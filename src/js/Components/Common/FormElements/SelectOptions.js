import React from 'react';


const SelectOptions = ({ item, active }) => {
	const ref = React.useRef(null);


	return (

		<div
			className={`item ${active ? 'active' : ''}`}
			ref={ref}

		>
			{item.name}
		</div>
	);

};

export default SelectOptions;