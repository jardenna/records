
import React from 'react';



import useTimeout from '@hooks/useTimeout';

import { ARROW_DOWN, ARROW_UP, ENTER, ESC, SPACE, END, HOME } from '@common/constants/keyboard';

function useFocus(options, multiple, placeholder, callBack) {
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
				setFocusedValue(options.length - 1);
				if (!multiple) {
					setValues([options[options.length - 1].value]);
				}
				break;

			case HOME:
				setFocusedValue(0);
				if (!multiple) {
					setValues([options[0].value]);
				}
				break;
			case ESC:
				if (isOpen) {
					setIsOpen(false);
				}
				break;
			case ENTER:
				setIsOpen(prevState => !prevState);
				callBack(values[0]);
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
		setIsOpen(!isOpen);

	};

	const onDeleteOption = (value) => {
		setValues(prevState => {
			const values = [...prevState];
			return values.filter(a => a !== value);
		});
	};

	const onClickOption = (value) => {
		callBack(value);
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

	return [onBlur, onKeyDown, values, stopPropagation, onDeleteOption, isOpen, focusedValue, onClickOption, onClick];
}

export default useFocus;
