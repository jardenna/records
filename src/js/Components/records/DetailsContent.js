import React from 'react';
import PropTypes from 'prop-types';

const DetailsContent = ({ text, label }) => {
   return (
      <div className="flex-wrapper details-content-wrapper">
         <span className="details-content flex-item text-bold">{label}:</span>
         <span className="details-content flex-item">{text}</span>

      </div>

   );

};
export default DetailsContent;

DetailsContent.propTypes = {

   text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])

};
DetailsContent.defaultProps = {
   text: '',
   label: ''
};