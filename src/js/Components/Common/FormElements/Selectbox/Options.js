import React from 'react';

function Options({ options, multiple, isOpen, values, focusedValue, onClickOption }) {

   if (!isOpen) {
      return null;
   }

   return (
      <ul className="options" role='listbox'>
         {options.map(
            (option, index) => {
               const { value } = option;
               const selected = values.includes(value);

               let className = 'option';
               if (selected) className += ' selected';
               if (index === focusedValue) className += ' focused';
               return (
                  <li
                     key={index}
                     role='option'
                     className={className}
                     onClick={() => onClickOption(value)}
                     aria-selected={selected ? true : null}
                  >
                     {multiple &&
                        <span className={`checkbox ${selected ? 'icon-checkmark' : null}`} />
                     }
                     {value}
                  </li>
               );
            }
         )}
      </ul>
   );
}

export default Options;
