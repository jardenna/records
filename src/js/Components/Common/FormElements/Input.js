import React from 'react';

import Label from '@formElements/Label';

function Input(props) {

	return (


		<div className="input-wrapper">
			<input
				type={props.type ? props.type : 'text'}
				name={props.name}
				value={props.value}
				id={props.inputIdentifier}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onFocus={props.onFocus}
				data-test='component-input'
				autoComplete={'new-' + props.name}
			/>

			<Label
				className={props.value !== '' ? 'top' : ''}
				htmlFor={props.inputIdentifier}
				text={`${props.label} ${props.isRequired && '*'}`}
			/>

			{props.showIcon && <span className={`${props.hidden ? 'chevron-down' : 'chevron-up'} icon icon-chevron`} />}
			{props.error}
		</div>

	);
}

export default Input;



