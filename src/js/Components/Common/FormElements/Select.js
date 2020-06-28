import React from 'react';
import SelectOptions from './SelectOptions';
import useElementFocus from '@hooks/useElementFocus';

const Select = ({ items, id }) => {
   const [selected, selectedItem] = useElementFocus(items, id);

   return (

      <div>
         <span>Selected: {selected ? selected.name : 'none'}</span>
         {items.map((item, i) => {

            return (
               <SelectOptions
                  key={item.id}
                  active={i === selectedItem}
                  item={item}


               />
            );
         })}
      </div>
   );
};

export default Select;
