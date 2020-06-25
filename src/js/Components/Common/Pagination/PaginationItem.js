import React from 'react';

function PaginationItem({ text, disabled, ariaDisabled, onClick }) {
   return (
      <li
         className={disabled}
         aria-disabled={ariaDisabled}
      >
         <a href="#" onClick={onClick}>

            <span
               aria-label={text}
               className="screen-reader"
            >
               {text}
            </span>
            <span className="chevron-left" aria-hidden="true" />
         </a>

      </li>
   );
}

export default PaginationItem;
