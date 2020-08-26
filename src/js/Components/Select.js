import React, { Fragment } from 'react';

import Options from '@components/Selectbox/Options';
import Values from '@components/Selectbox/Values';

import useTimeout from '@hooks/useTimeout';

import { ARROW_DOWN, ARROW_UP, ENTER, ESC, SPACE, END, HOME } from '@common/constants/keyboard';


function Select({ options, label, multiple, placeholder, zIndex }) {

	const [values, setValues] = React.useState([]);
	const [focusedValue, setFocusedValue] = React.useState(-1);
	const [isOpen, setIsOpen] = React.useState(false);
	const [typed, setTyped] = React.useState('');




	useTimeout(() => setTyped(''), 1000, typed);

	const onBlur = () => {
		setIsOpen(false);
		if (multiple) {
			setFocusedValue(-1);

		} else {
			const value = values[0];
			if (value) {
				setFocusedValue(options.findIndex(option => option.value === value));
			}

			return (
				focusedValue
			);
		}


	};

	const onKeyDown = (e) => {
		e.preventDefault();
		switch (e.key) {
			case SPACE:
				if (isOpen) {
					if (multiple) {

						if (focusedValue !== -1) {
							const value = options[focusedValue] && options[focusedValue].value;

							setValues(prevState => {
								const index = prevState.indexOf(value);
								if (index === -1) {
									return [...prevState, value];
								} else {
									return values.filter(item => item !== value);
								}

							});
						}
					}
				}
				break;
			case END:

				if (isOpen) {
					const optionsLength = options.length - 1;
					setFocusedValue(optionsLength);
					if (!multiple) {
						setValues([options[optionsLength].value]);
					}

				}
				break;

			case HOME:

				if (isOpen) {
					const optionsLength = 0;
					setFocusedValue(optionsLength);
					if (!multiple) {
						setValues([options[optionsLength].value]);
					}
				}
				break;
			case ESC:

				if (isOpen) {
					setIsOpen(false);
				}
				break;
			case ENTER:
				setIsOpen(prevState => !prevState);
				break;
			case ARROW_DOWN:

				if (focusedValue < options.length - 1) {

					setFocusedValue(prevState => {
						return (
							prevState + 1
						);
					});

					if (!multiple) {
						setValues([options[focusedValue + 1].value]);
					}

				}


				break;

			case ARROW_UP:
				if (focusedValue > 0) {

					setFocusedValue(prevState => {
						return (
							prevState - 1
						);
					});

					if (!multiple) {
						setValues([options[focusedValue - 1].value]);
					}

				}
				break;

			default:
				if (/^[a-z0-9]$/i.test(e.key)) {
					const char = e.key;
					const regex = new RegExp(`^${char}`, 'i');
					const index = options.findIndex(option => regex.test(option.value));
					const searchOption = [options[index] ? options[index].value : placeholder];
					setFocusedValue(index);
					if (!multiple) {
						setValues(searchOption);
					}
					setTyped(char);
				}
				break;
		}


	};

	const onClick = () => {
		setIsOpen(prevState => !prevState);

	};

	const onDeleteOption = (value) => {
		setValues(prevState => {
			const values = [...prevState];
			return values.filter(a => a !== value);
		});
	};

	const onClickOption = (value) => {
		if (!multiple) {
			setValues([value]);
			setIsOpen(false);
		} else {
			setValues(prevState => {
				const values = [...prevState, value];
				const index = prevState.indexOf(value);

				if (index !== -1) {

					return values.filter(item => item !== value);
				}

				return values;
			});
		}

	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<Fragment>
			<section
				className="select"
				tabIndex="0"
				onBlur={onBlur}
				onKeyDown={onKeyDown}
				style={{ zIndex: zIndex }}
			>
				<label className="label">{label}</label>
				<div className="selection" onClick={onClick}>
					<Values
						placeholder={placeholder}
						multiple={multiple}
						values={values}
						stopPropagation={stopPropagation}
						onDeleteOption={onDeleteOption}
					/>

					<span className={`arrow ${isOpen ? 'chevron-up' : 'chevron-down'}`} />

				</div>
				<Options
					options={options}
					isOpen={isOpen}
					multiple={multiple}
					values={values}
					focusedValue={focusedValue}
					onClickOption={onClickOption}
				/>
			</section>
		</Fragment>
	);
}



export default Select;