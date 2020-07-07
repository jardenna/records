import React from 'react';

import CheckBox from '@commonReact/svg/CheckBox';



function Options({ options, multiple, isOpen, values, focusedValue, onClick }) {


   if (!isOpen) {
      return null;
   }

   return (
      <div className="options">
         {options.map(
            (option, index) => {


               const { value } = option;

               const selected = values.includes(value);

               let className = 'option';
               if (selected) className += ' selected';
               if (index === focusedValue) className += ' focused';

               return (
                  <div
                     key={value}
                     data-value={value}
                     className={className}

                     onClick={onClick}
                  >
                     {multiple ?
                        <span className="checkbox">
                           {selected ? <CheckBox /> : null}
                        </span> :
                        null
                     }
                     {value}
                  </div>
               );
            }
         )}
      </div>
   );
}

export default Options;
