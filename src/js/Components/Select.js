import React from 'react';

import Options from '@components/Selectbox/Options';
import Values from '@components/Selectbox/Values';

import useTimeout from '@hooks/useTimeout';

import { ARROW_DOWN, ARROW_UP, ENTER, ESC, SPACE } from '@common/constants/keyboard';

function Select({ label, options, multiple, placeholder }) {

	const [values, setValues] = React.useState([]);
	const [focusedValue, setFocusedValue] = React.useState(-1);
	const [isOpen, setIsOpen] = React.useState(false);
	const [typed, setTyped] = React.useState('');

	useTimeout(() => setTyped(''), 1000, typed);

	const onBlur = () => {

		if (multiple) {
			setFocusedValue(prevState => {

				return (
					setFocusedValue(-1),
					setIsOpen(false)
				);
			});
		} else {
			const value = values[0];
			let focusedValue = -1;

			if (value) {
				focusedValue = options.findIndex(option => option.value === value);
			}

			return (
				setFocusedValue(focusedValue),
				setIsOpen(false)
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
									const values = [...prevState, value];
									return values;
								} else {
									const arr = values.filter(item => item !== value);
									setValues(arr);
								}

							});
						}
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

						if (!multiple) {
							setValues([options[prevState + 1].value]);
						}
						return (
							focusedValue + 1
						);
					});

				}


				break;

			case ARROW_UP:
				if (focusedValue > 0) {

					setFocusedValue(prevState => {
						if (!multiple) {
							setValues([options[prevState - 1].value]);
						}
						return (
							prevState - 1
						);
					});
				}
				break;

			default:
				if (/^[a-z0-9]$/i.test(e.key)) {
					const char = e.key;
					setTyped(prevState => {
						const typeds = prevState + char;
						const re = new RegExp(`^${typeds}`, 'i');
						const index = options.findIndex(option => re.test(option.value));
						const searchOption = [options[index] ? options[index].value : placeholder];

						if (index === -1) {
							setTyped(prevState + char);
						}
						if (multiple) {
							setFocusedValue(index);
							setTyped(prevState + char);
						} else {
							setValues(searchOption);
							setFocusedValue(index);
							setTyped(prevState + char);
						}
						return typeds;

					});


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
					const arr = values.filter(item => item !== value);
					setValues(arr);
				}

				return values;
			});
		}

	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<div>
			<div
				className="select"
				tabIndex="0"
				onBlur={onBlur}
				onKeyDown={onKeyDown}

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
			</div>
		</div>
	);
}



export default Select;