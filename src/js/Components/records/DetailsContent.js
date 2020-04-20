import React from 'react';


const DetailsContent = ({ text, label }) => (

   <div className="inline">
      <span className="text-bold">{label}:</span>
      {text}
   </div>


);

export default DetailsContent;