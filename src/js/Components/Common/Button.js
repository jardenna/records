import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
	return(
		<button
			type={props.type}
			className={props.className}
			onClick={props.onClick}
		>{props.text}</button>

	);
}
export default Button;


Button.propTypes ={
	type: PropTypes.string,
	className:PropTypes.string.isRequired,
	text:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onClick: PropTypes.func
};
