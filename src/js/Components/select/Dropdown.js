import React, { Fragment, useState, useCallback } from 'react';

import Input from '@formElements/Input';
import SelectOptions from './SelectOptions';
import useElementFocus from './useElementFocus';
import useCustomContext from '@hooks/useCustomContext';

function Dropdown() {
   const { result, inputIdentifier, inputName, type, label } = useCustomContext();
   const managers = result;
   const managersLength = managers.data && managers.data.length;
   const [value, setValue] = useState('');
   const [hidden, setHidden] = useState(true);
   const [styleHeight, setStyleHeight] = useState(0);
   const [focus, setFocus] = useElementFocus(managersLength);
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

   const handleOnInputFocus = (e) => {

      //The dropdown should only show first two options
      //Therefore we need to create a reference to find the height of 1 select option
      const wrapper = e.target.closest('[data-selector="select"]');
      const managerInfo = wrapper.querySelectorAll('[data-selector="selectInfo"]');
      //Calculating the height of the dropdown
      managerInfo.forEach(element => {
         const height = element.getBoundingClientRect().height;
         const paddingBottom = window.getComputedStyle(element).paddingBottom;
         const padding = Number(paddingBottom.replace('px', ''));
         const styleHeight = (Number(height) * 2) + (padding * 2) + padding;
         return (
            setHidden(false),
            setStyleHeight(styleHeight)
         );
      });

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
         <div
            className={`${hidden ? 'hidden' : ''} select-wrapper`}>
            {managers.data &&
               managers.data.map((manager, index) => {

                  //Destructuring
                  const { id } = manager;
                  const { name } = manager.attributes;


                  const managersData = managers.data.map(a => a.attributes);

                  return (

                     <Fragment key={id}>
                        {managersData &&

                           <SelectOptions
                              id={id}
                              onClick={() => handleSelect(name, index)}
                              name={name}
                              setFocus={setFocus}
                              index={index}
                              focus={focus === index}
                              onKeyUp={(e) => handleKeyUp(e, name)}
                           />


                        }
                     </Fragment>
                  );
               })}


         </div>
      </article>
   );
}


export default Dropdown;
