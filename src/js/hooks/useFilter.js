import React from 'react';

function useFilter(initialState, items) {
   const [values, setValues] = React.useState(initialState);

   const filteredText = items.filter(item => {

      for (let key in values) {

         if (item[key]) {
            const a = typeof item[key] === 'string' && item[key].toLowerCase();
            const b = typeof values[key] === 'string' && values[key].toLowerCase();

            if (!a.includes(b) && values[key] !== '') {
               return false;
            }

         }
      }
      return true;
   });



   const handleChange = (e) => {
      const { name, value } = e.target;


      setValues({
         ...values,
         [name]: value
      });

   };

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