import React from 'react';

import Options from '@components/Selectbox/Options';
import Values from '@components/Selectbox/Values';

function Select({ label, options, multiple, placeholder }) {

	const [values, setValues] = React.useState([]);
	const [focusedValue, setFocusedValue] = React.useState(-1);
	const [isOpen, setIsOpen] = React.useState(false);
	const [typed, setTyped] = React.useState('');



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
		// const { options, multiple } = this.props;
		// const { isOpen } = this.state;
		console.log(isOpen);

		// switch (e.key) {
		// 	case ' ':
		// 		e.preventDefault();
		// 		if (isOpen) {
		// 			if (multiple) {
		// 				this.setState(prevState => {
		// 					const { focusedValue } = prevState;

		// 					if (focusedValue !== -1) {
		// 						const [...values] = prevState.values;
		// 						const value = options[focusedValue].value;
		// 						const index = values.indexOf(value);

		// 						if (index === -1) {
		// 							values.push(value);
		// 						} else {
		// 							values.splice(index, 1);
		// 						}

		// 						return { values };
		// 					}
		// 				});
		// 			}
		// 		} else {
		// 			this.setState({
		// 				isOpen: true
		// 			});
		// 		}
		// 		break;
		// 	case 'Escape':
		// 	case 'Tab':
		// 		if (isOpen) {
		// 			e.preventDefault();
		// 			this.setState({
		// 				isOpen: false
		// 			});
		// 		}
		// 		break;
		// 	case 'Enter':
		// 		this.setState(prevState => ({
		// 			isOpen: !prevState.isOpen
		// 		}));
		// 		break;
		// 	case 'ArrowDown':
		// 		e.preventDefault();


		// 		this.setState(prevState => {
		// 			let { focusedValue } = prevState;

		// 			if (focusedValue < options.length - 1) {
		// 				focusedValue++;

		// 				if (multiple) {
		// 					return {
		// 						focusedValue
		// 					};
		// 				} else {
		// 					return {
		// 						values: [options[focusedValue].value],
		// 						focusedValue
		// 					};
		// 				}
		// 			}
		// 		});
		// 		break;
		// 	case 'ArrowUp':
		// 		e.preventDefault();
		// 		this.setState(prevState => {
		// 			let { focusedValue } = prevState;

		// 			if (focusedValue > 0) {
		// 				focusedValue--;

		// 				if (multiple) {
		// 					return {
		// 						focusedValue
		// 					};
		// 				} else {
		// 					return {
		// 						values: [options[focusedValue].value],
		// 						focusedValue
		// 					};
		// 				}
		// 			}
		// 		});
		// 		break;
		// 	default:
		// 		if (/^[a-z0-9]$/i.test(e.key)) {
		// 			const char = e.key;

		// 			clearTimeout(this.timeout);
		// 			this.timeout = setTimeout(() => {
		// 				this.setState({
		// 					typed: ''
		// 				});
		// 			}, 1000);

		// 			this.setState(prevState => {
		// 				const typed = prevState.typed + char;
		// 				const re = new RegExp(`^${typed}`, 'i');
		// 				const index = options.findIndex(option => re.test(option.value));

		// 				if (index === -1) {
		// 					return {
		// 						typed
		// 					};
		// 				}

		// 				if (multiple) {
		// 					return {
		// 						focusedValue: index,
		// 						typed
		// 					};
		// 				} else {
		// 					return {
		// 						values: [options[index].value],
		// 						focusedValue: index,
		// 						typed
		// 					};
		// 				}
		// 			});
		// 		}
		// 		break;
		// }
	};

	const onClick = () => {
		setIsOpen(prevState => (!prevState.isOpen));

	};

	const onDeleteOption = (e) => {
		const { value } = e.currentTarget.dataset;

		setValues(prevState => {
			const values = [...prevState];
			const index = values.indexOf(value);
			values.splice(index, 1);

			return values;
		});


	};

	const onClickOption = (e) => {
		const { value } = e.currentTarget.dataset;

		setValues(prevState => {
			if (!multiple) {

				return (
					setValues([value]),
					setIsOpen(false)
				);
			}
			const values = [...prevState, value];

			const index = prevState.indexOf(value);

			if (index !== -1) {
				const arr = values.filter(item => item !== value);
				setValues(arr);
			}

			return values;
		});
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
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
				onClick={onClickOption}
			/>
		</div>
	);
}



export default Select;