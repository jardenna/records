import React from 'react';

function Values({ test, placeholder, multiple, values, stopPropagation, onDeleteOption }) {

   if (values.length === 0) {
      return (
         <div className="placeholder">
            {placeholder}
         </div>
      );
   }

   if (multiple) {
      return values.map((value, index) => {
         return (
            <span
               key={index}
               onClick={stopPropagation}
               className="multiple value"
            >
               {value} {test}
               <span
                  onClick={() => onDeleteOption(value)}
                  className={`delete ${'icon-x'}`}
               />

            </span>
         );
      });
   }

   return (
      <div className="value">
         {values[0]}{test}
      </div>
   );

}

export default Values;
