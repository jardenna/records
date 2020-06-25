import React from 'react';


import useElementFocus from '@hooks/useElementFocus';
import { normalizeData } from '@common/normalizeData';

function Selectbox() {


   const items = [{ 10: 10, 20: 20, 50: 50, all: 'Show all' }];
   const data = normalizeData(items);

   const [itemsPerpage, setItemsPerPage] = React.useState(10);
   const [dropdown, setDropdown] = React.useState(false);
   const [currentFocus, setCurrentFocus] = useElementFocus(data[0].length);

   const handleSelect = (id) => {
      setItemsPerPage(id);
      setDropdown(false);
   };
   // const handleSelect = useCallback((name, index) => {
   //    setFocus(index);
   //    return (
   //       setItemsPerPage(id),
   //       setDropdown(false)
   //    );
   // }, [name, setFocus]);

   const handleKeyUp = (e, name) => {
      if (e.key === 'Enter') {
         setItemsPerPage(name),
            setDropdown(false);
      }


   };

   const ref = React.useRef(null);
   React.useEffect(() => {

      if (currentFocus) {

         ref.current.focus();
      }
   }, [currentFocus]);

   return (

      <section className="selectbox">
         <div onClick={() => setDropdown(!dropdown)} >
            {itemsPerpage}
         </div>
         <ul className={!dropdown ? 'hidden' : ''}>

            {data[0].map(selectOption => {
               return (
                  <li
                     key={selectOption.text}
                     ref={ref}
                     onClick={() => handleSelect(selectOption.text)}
                     tabIndex={0}
                     focus={currentFocus === 1}
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
