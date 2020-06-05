import React, { Fragment, useState, useCallback } from 'react';
import Input from '@formElements/Input';
import SelectOptions from './SelectOptions';
import useElementFocus from '@hooks/useElementFocus';


function Selectbox() {

   //const { result, isLoading, hasError } = useGlobalFetch( Endpoints.managers, 'Get', {});
   const managers = [];
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

   // if (isLoading) {
   // 	return <Loader/>;
   // }

   // if (hasError)	{
   // 	return 'There has been an error';
   // }
   return (
      <article className="manager-select" data-selector="select">

         <form>
            <Input
               type={'text'}
               name={'search-managers'}
               label={'Manager'}
               value={value}
               inputIdentifier={'search-managers'}
               placeholder={'Choose Manager'}
               onChange={handleSearch}
               onFocus={handleOnInputFocus}
               showIcon={showIcon}
               hidden={hidden}
            />
         </form>
         <div
            className={`${hidden ? 'hidden' : ''} select-wrapper overflow-wrapper`}
            style={{ height: styleHeight + 'px' }}>
            {managers.data &&
               managers.data.map((manager, index) => {
                  //In order to find a conneced Id between managers.data and  manager.included
                  //connected Id example: managers.data.id= '12', manager.included.id= '13'
                  //The Id both for managers data and  manager included is a string
                  //To find the manager email we need to:
                  //add 1 to the selected managers.data.id and find connected Id in manager.included
                  //Convert manager id to a number and add 1
                  const searchId = Number(manager.id) + 1;
                  //Convert number back to a string
                  const searchIdString = searchId.toString();
                  //Find the email connected to the converted id
                  const emailAttributes = managers.included && managers.included.find(include => include.id === searchIdString).attributes;

                  //Destructuring
                  const { id } = manager;
                  const { firstName, lastName, name } = manager.attributes;
                  const { email } = emailAttributes;

                  //Function for filtering the managers when searching
                  const managersData = managers.data.map(a => a.attributes);
                  const filteredManagers = managersData && managersData.filter(a => a.name.toLowerCase().includes(value.toLowerCase()));
                  const filteredManagersName = filteredManagers.find(a => a.name === name);


                  return (

                     <Fragment key={id}>
                        {filteredManagersName &&

                           <SelectOptions
                              id={id}
                              onClick={() => handleSelect(name, index)}
                              firstNameChar={firstName.charAt(0)}
                              lastNameChar={lastName.charAt(0)}
                              name={name}
                              email={email}
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


export default Selectbox;
