import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function Input(props){
	return(
		<Fragment>
			<label htmlFor={props.inputIdentifier}>{props.label}</label>
			<div className="input-wrapper">
				<input
					type={props.type}
					name={props.name}
					value={props.value}
					id={props.inputIdentifier}
					placeholder={props.placeholder}
					onChange={props.onChange}
					onFocus={props.onFocus}
					data-test='component-input'
				/>
				{props.showIcon && <span className={`${props.hidden ? 'chevron-down':'chevron-up'} icon icon-chevron`}/>}
			</div>
		</Fragment>
	);
}

export default Input;


Input.propTypes ={
	type: PropTypes.string.isRequired,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	inputIdentifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	hidden:PropTypes.bool,
	onChange: PropTypes.func
};
