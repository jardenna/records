import React from 'react';
import PropTypes from 'prop-types';

import useCustomContext from '@hooks/useCustomContext';
import Label from '@formElements/Label';

function Input(props) {
	const formContext = useCustomContext();
	return (
		<div className={`input-wrapper ${props.previewClassName ? props.previewClassName : ''}`}>

			<input
				type={props.type}
				name={props.name}
				value={props.value !== null ? props.value : ''}
				id={props.inputIdentifier}
				placeholder={props.placeholder}
				onChange={formContext.onChange}
				onFocus={props.onFocus}
				data-test='component-input'
				autoComplete={'off'}
				onBlur={formContext.onBlur}
				className={props.error ? 'input-error' : null}
			/>

			<Label
				className={props.value && props.value !== '' ? 'top' : ''}
				htmlFor={props.inputIdentifier}
				required={props.isRequired}
				text={props.label}
			/>

			{props.showIcon && <span className={`${props.hidden ? 'chevron-down' : 'chevron-up'} icon icon-chevron`} />}
			{props.error && <span className="error">{props.error}</span>}
		</div>

	);
}

export default Input;

Input.defaultProps = {
	type: 'text'
};