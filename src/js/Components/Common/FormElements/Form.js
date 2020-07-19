import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '@formElements/Input';
import TextArea from '@formElements/TextArea';
import Button from '@commonReact/Button';
import useCustomContext from '@hooks/useCustomContext';


function Form(props) {

	const formContext = useCustomContext();

	const btnClass = `btn-${formContext.btnVaiant ? formContext.btnVaiant : props.btnVaiant}`;

	return (
		<form onSubmit={formContext.onSubmit} noValidate className={formContext.className}>

			{
				formContext.inputs.map(input => {

					return (
						<Fragment key={input.inputIdentifier}>
							{input.type !== 'textarea' ? <Input
								type={input.type}
								name={input.name}
								value={input.value}
								inputIdentifier={input.inputIdentifier}
								label={input.label}
								isRequired={input.isRequired}
								error={input.error}
							/> :
								<TextArea
									name={input.name}
									value={input.value}
									inputIdentifier={input.inputIdentifier}
									label={input.label}
									isRequired={input.isRequired}
									error={input.error}

								/>
							}

						</Fragment>
					);
				})
			}

			<Button
				type='submit'
				className={btnClass}
				text={formContext.btnText}
			/>

		</form>
	);
}
export default Form;

Form.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onClick: PropTypes.func,
	inputs: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		inputIdentifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		isRequired: PropTypes.bool,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		error: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	})).isRequired
};

Form.defaultProps = {
	btnVaiant: 'primary'
};


