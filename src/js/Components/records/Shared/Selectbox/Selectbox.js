import React, { Fragment } from 'react';

function Selectbox({ selectArr, onBlur, onSelect, onClick, isOpen, text, active }) {

   return (
      <Fragment>
         <section
            className="selectbox"
            tabIndex="0"
            onBlur={onBlur}
         >

            <div className="selection" onClick={onClick}>
               {text}
               <span className={`chevron ${isOpen ? 'chevron-up' : 'chevron-down'}`} />
            </div>
            <div role='listbox'>
               {isOpen && selectArr.map(option =>
                  <div
                     key={option.id}
                     role='option'
                     aria-selected={active ? true : null}
                     onClick={() => onSelect(option.id)}
                     className={`selectbox-option ${active === option.id && 'active'}`}

                  >{option.text}
                  </div>
               )}
            </div>
         </section>
      </Fragment>
   );
}



export default Selectbox;