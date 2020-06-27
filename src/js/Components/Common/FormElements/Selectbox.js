import React from 'react';



import { normalizeData } from '@common/normalizeData';

function Selectbox() {


   const items = [{ 10: 10, 20: 20, 50: 50, all: 'Show all' }];
   const data = normalizeData(items);

   const [itemsPerpage, setItemsPerPage] = React.useState(10);
   const [dropdown, setDropdown] = React.useState(false);


   const handleSelect = (id) => {
      setItemsPerPage(id);
      setDropdown(false);
   };


   const handleKeyUp = (e, name) => {
      if (e.key === 'Enter') {
         setItemsPerPage(name),
            setDropdown(false);
      }

   };



   return (

      <section className="selectbox">
         <div onClick={() => setDropdown(!dropdown)} >
            {itemsPerpage}
         </div>
         <ul className={!dropdown ? 'hidden' : ''}>

            {data[0].map((selectOption, index) => {
               return (
                  <li
                     key={selectOption.text}

                     onClick={() => handleSelect(selectOption.text)}


                     onKeyUp={(e) => handleKeyUp(e, selectOption.text)}
                  >
                     {selectOption.text}
                  </li>
               );
            }

            )}

         </ul>
      </section>
   );
}


export default Selectbox;
