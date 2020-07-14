import React from 'react';

const useToggle = (initialState = []) => {
   const [selected, setSelected] = React.useState(initialState);

   const toggle = value => {
      selected.includes(value) ? setSelected(selected.filter(s => s !== value)) : setSelected([...selected, value]);
   };

   return [toggle, selected];
};

export default useToggle;