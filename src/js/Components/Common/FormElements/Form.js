import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '@formElements/Input';
import TextArea from '@formElements/TextArea';
import Button from '@commonReact/Button';
import useCustomContext from '@hooks/useCustomContext';
import ImagePreview from '@formElements/ImagePreview';

function Form(props) {

	const formContext = useCustomContext();
	const { btnVaiant, btnText, onSubmit, className, inputs, showPreviewImage } = formContext;

	const btnClass = `btn-${btnVaiant ? btnVaiant : props.btnVaiant}`;

	return (
		<React.Fragment>

			<form onSubmit={onSubmit} noValidate className={className}>
				{
					inputs.map(input => {

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
									previewClassName={input.previewClassName}
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
				<footer className="form-footer">


					<Button
						type='submit'
						className={btnClass}
						btnText={btnText}
					/>
				</footer>


			</form>


			{showPreviewImage &&
				<ImagePreview />
			}
		</React.Fragment>

	);
}
export default Form;

Form.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
	btnVaiant: 'primary',
	btnText: 'submit',
	inputs: []
};


