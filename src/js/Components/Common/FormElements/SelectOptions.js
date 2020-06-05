import React, { useRef , useEffect} from 'react';
import PropTypes from 'prop-types';


const SelectOptions =(props)=>{
	const ref = useRef(null);
	useEffect(() => {
		if (props.focus) {

			ref.current.focus();
		}
	}, [props.focus]);



	return(
		<section id={props.id} className="select-options"
			onClick={props.onClick}
			tabIndex={props.focus ? 0 : -1}
			onKeyUp = {props.onKeyUp}
			ref={ref}
		>

			<div className="select-info" data-selector="selectInfo">
				{props.firstNameChar &&
				<span className="select-icon">
					{props.firstNameChar} {props.lastNameChar}
				</span>
				}


				<div className="select-name">
					<h2> { props.name} </h2>
					{props.email &&
						<a className="select-mail" href={`mailto:${props.email}`} tabIndex="0">{props.email}</a>
					}

				</div>


			</div>

		</section>
	);


};

export default SelectOptions;

SelectOptions.propTypes ={
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	firstNameChar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	lastNameChar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	email: PropTypes.string,
	focus: PropTypes.bool.isRequired

};
