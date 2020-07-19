import React from 'react';

import useCustomContext from '@hooks/useCustomContext';
import Label from '@formElements/Label';

function Input(props) {
	const formContext = useCustomContext();

	return (
		<div className="input-wrapper">


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
			/>

			<Label
				className={props.value !== '' ? 'top' : ''}
				htmlFor={props.inputIdentifier}
				required={props.isRequired}
				text={props.label}
			/>

			{props.showIcon && <span className={`${props.hidden ? 'chevron-down' : 'chevron-up'} icon icon-chevron`} />}
			{props.error}
		</div>

	);
}

export default Input;

Input.defaultProps = {
	type: 'text'
};