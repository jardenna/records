import React from 'react';

import Options from '@formElements/SelectBox/Options';
import Values from '@formElements/SelectBox/Values';
import useFocus from '@hooks/useFocus';

function SelectBox({ options, label, multiple, placeholder, zIndex, callBack, textLength }) {

   const [onBlur, onKeyDown, values, stopPropagation, onDeleteOption, isOpen, focusedValue, onClickOption, onClick] = useFocus(options, multiple, placeholder, callBack);

   return (

      <section
         className="select"
         tabIndex="0"
         onBlur={onBlur}
         onKeyDown={onKeyDown}
         style={{ zIndex: zIndex }}
      >
         <label className="label">{label}</label>
         <div className="selection" onClick={onClick}>
            <Values
               placeholder={placeholder}
               multiple={multiple}
               values={values}
               stopPropagation={stopPropagation}
               onDeleteOption={onDeleteOption}
            />

            <span className={`chevron ${isOpen ? 'chevron-up' : 'chevron-down'}`} />

         </div>
         <Options
            options={options}
            isOpen={isOpen}
            multiple={multiple}
            values={values}
            focusedValue={focusedValue}
            onClickOption={onClickOption}
            textLength={textLength}
         />
      </section>

   );
}



export default SelectBox;