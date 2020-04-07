import React from 'react';
import PropTypes from 'prop-types';

function Figure(props){
	return(
		<figure className={props.className && props.className}>
			<img src={props.src} alt={props.alt}/>

		</figure>
	);
}
export default Figure;


Figure.propTypes ={

	className:PropTypes.string,
	src:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	alt:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired

};
