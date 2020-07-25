import React from 'react';


const useToggle = (initialState = [], callback = () => { }) => {
   const [selected, setSelected] = React.useState(initialState);
   const [isOpen, setIsOpen] = React.useState(false);

   const onBlur = () => {
      setIsOpen(false);
   };

   const selectedArr = (value) => {
      callback();
      selected.includes(value) ? setSelected(selected.filter(s => s !== value)) : setSelected([...selected, value]);
   };

   const toggle = value => {
      selectedArr(value);

   };

   const close = () => {
      setIsOpen(!isOpen);

   };



   return [toggle, selected, close, isOpen, onBlur];
};

export default useToggle;