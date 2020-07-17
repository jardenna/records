import React from 'react';


const useToggle = (initialState = [], callback) => {
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

   const submit = (value) => {
      callback(value);
      setSelected([]);

   };

   return [toggle, selected, submit, onBlur];
};

export default useToggle;