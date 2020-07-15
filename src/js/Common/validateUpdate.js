export function validateUpdate(values) {
   const { artist, title, prodYear } = values;


   let errors = {};
   // Email Errors


   if (!artist) {
      errors.artist = 'Required artist';
   }
   if (!title) {
      errors.title = 'Required title';
   }
   if (!prodYear) {
      errors.prodYear = 'Required prodYear';
   }
   return errors;
}



