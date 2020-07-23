import React from 'react';


const useToggle = (initialState = []) => {
   const [selected, setSelected] = React.useState(initialState);

   const onBlur = () => {
      setSelected([]);

   };

   const selectedArr = (value) => {
      selected.includes(value) ? setSelected(selected.filter(s => s !== value)) : setSelected([...selected, value]);
   };

   const toggle = value => {
      selectedArr(value);
   };





   return [toggle, selected, onBlur];
};

export default useToggle;