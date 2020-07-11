import React from 'react';

function Values({ placeholder, multiple, values, stopPropagation, onDeleteOption }) {

   if (values.length === 0) {
      return (
         <div className="placeholder">
            {placeholder}
         </div>
      );
   }

   if (multiple) {
      return values.map(value => {
         return (
            <span
               key={value}
               onClick={stopPropagation}
               className="multiple value"
            >
               {value}
               <span
                  onClick={() => onDeleteOption(value)}
                  className={`delete ${'btn-delete'}`}
               />

            </span>
         );
      });
   }

   return (
      <div className="value">
         {values[0]}
      </div>
   );

}

export default Values;
