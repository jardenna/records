import React, { Fragment, useState, useCallback } from 'react';

import Input from '@formElements/Input';
import SelectOptions from './SelectOptions';

import useCustomContext from '@hooks/useCustomContext';
import useFocus from '@hooks/useFocus';


function Dropdown() {
   const { inputIdentifier, inputName, type, label, managerData } = useCustomContext();
   const managersLength = managerData && managerData.length;
   const [value, setValue] = useState('');
   const [hidden, setHidden] = useState(true);
   const [focus, setFocus] = useFocus(managersLength);

   const handleSearch = (e) => {
      return (
         setValue(e.target.value),
         setHidden(false)
      );
   };
   const handleKeyUp = (e, name) => {
      if (e.key === 'Enter') {
         setValue(name),
            setHidden(true);
      }
   };


   const handleOnInputFocus = () => {
      return (
         setHidden(false)
      );

   };

   const handleSelect = useCallback((name, index) => {

      setFocus(index);
      return (
         setValue(name),
         setHidden(true)
      );
   }, [name, setFocus]);

   const showIcon = true;



   return (
      <article className="manager-select" data-selector="select">
         <form>
            <Input
               type={type}
               name={inputName}
               label={label}
               value={value}
               inputIdentifier={inputIdentifier}
               onChange={handleSearch}
               onFocus={handleOnInputFocus}
               showIcon={showIcon}
               hidden={hidden}
            />
         </form>
         <section className={`${hidden ? 'hidden' : ''} selectbox`} >
            {managerData &&
               managerData.map((manager, index) => {

                  //Destructuring
                  const { id } = manager;
                  const { name, Department } = manager.attributes;

                  return (
                     <Fragment key={id}>
                        <SelectOptions
                           onClick={() => handleSelect(name, index)}
                           data={[name, Department]}
                           focus={focus === index}
                           onKeyUp={(e) => handleKeyUp(e, name)}
                        />

                     </Fragment>
                  );
               })}


         </section>
      </article>
   );
}


export default Dropdown;


