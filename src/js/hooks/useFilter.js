import React from 'react';

function useFilter(initialState, items) {
   const [values, setValues] = React.useState(initialState);

   // const filteredText = items.filter(item => {
   //    for (let key in values) {
   //       const itemLower = item[key].toLowerCase();

   //       if (!itemLower || !itemLower.includes(values[key]) && values[key] !== '')
   //          return false;
   //    }
   //    return true;
   // });


   const filteredText = items.filter(function (item) {
      for (var key in values) {

         if (!item[key].toLowerCase().includes(values[key].toLowerCase()) && values[key] !== '')
            return false;
      }
      return true;
   });


   function handleChange(e) {
      const { name, value } = e.target;


      setValues({
         ...values,
         [name]: value
      });

   }

   const handleEmptyInput = (name) => {
      setValues({
         ...values,
         [name]: ''
      });

   };

   return {
      handleChange, values, handleEmptyInput, filteredText

   };
}

export default useFilter;