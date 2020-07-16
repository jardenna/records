import React from 'react';


const DetailsContent = ({ text, label }) => (

   <div className="flex-wrapper">
      <span className="details-content flex-item text-bold">{label}:</span>
      <span className="details-content flex-item">{text}</span>

   </div>


);

export default DetailsContent;