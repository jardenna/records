import React from 'react';


const SelectOptions = ({ item, active, test }) => {
	const ref = React.useRef(null);
	// React.useEffect(() => {
	// 	if (props.focus) {

	// 		ref.current.focus();
	// 	}
	// }, [props.focus]);
	console.log(ref.current && ref.current.id);
	return (

		<div
			className={`item ${active ? 'active' : ''}`}
			ref={ref}
			id={item.id + test}
		>
			{item.name}
		</div>
	);

};

export default SelectOptions;