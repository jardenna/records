import React from 'react';

import Options from '@formElements/SelectBox/Options';
import Values from '@formElements/SelectBox/Values';
import useSelectbox from '@hooks/useSelectbox';

function SelectBox({ options, label, multiple, placeholder, zIndex, callBack }) {

   const [onBlur, onKeyDown, values, onDeleteOption, isOpen, focusedValue, onClickOption, onClick] = useSelectbox(options, multiple, placeholder, callBack);

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
               onDeleteOption={onDeleteOption}
            />
            <span className={`chevron ${isOpen ? 'chevron-up' : 'chevron-down'}`} />

         </div>
         <Options
            options={options}
            multiple={multiple}
            values={values}
            isOpen={isOpen}
            focusedValue={focusedValue}
            onClickOption={onClickOption}
         />
      </section>

   );
}



export default SelectBox;