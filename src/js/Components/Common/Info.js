import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function Info(props){
	return(
		<Fragment>
			<span className="text-bold">{props.description}</span>:
			{' '}
			<span>{props.text}</span>.
		</Fragment>
	);
}
export default Info;


Info.propTypes ={
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	description:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
