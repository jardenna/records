import React from 'react';

import CheckBox from '@commonReact/svg/CheckBox';



function Options({ options, multiple, isOpen, values, focusedValue, onClickOption }) {


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
                     className={className}
                     onClick={() => onClickOption(value)}
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
