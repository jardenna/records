import React from 'react';

function Values({ additionalText, placeholder, multiple, values, onDeleteOption }) {

   if (values.length === 0) {
      return (
         <div className="placeholder">
            {placeholder}
         </div>
      );
   }

   if (multiple) {
      return (
         <div className="value-wrapper">
            {
               values.map((value, index) => (
                  <span
                     key={index}

                     className="multiple value"
                  >
                     {value} {additionalText}
                     <span
                        onClick={() => onDeleteOption(value)}
                        className={`delete ${'icon-x'}`}
                     />

                  </span>
               ))
            }
         </div>
      );
   }

   return (
      <div className="value">
         {values[0]} {additionalText}
      </div>
   );

}

export default Values;
