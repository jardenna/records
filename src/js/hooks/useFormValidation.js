import React from 'react';

function useFormValidation(initialState = {}, callBack, validate, id) {
   const [values, setValues] = React.useState(initialState);
   const [errors, setErrors] = React.useState({});
   const [touched, setTouched] = React.useState([]);
   const [isSubmitting, setSubmitting] = React.useState(false);
   const [file, setFile] = React.useState('');
   const [fileName, setFileName] = React.useState('');
   const [imgUpdated, setImgUpdated] = React.useState(false);


   React.useEffect(() => {
      if (isSubmitting) {
         const noErrors = Object.keys(errors).length === 0;
         if (noErrors) {
            setTouched([]);
            callBack();

            if (!id) {
               setValues(initialState);
            }
         } setSubmitting(false);
      }
   }, [errors]);


   React.useEffect(() => {
      const validationErrors = validate(values);
      const touchedErrors = Object.keys(validationErrors)
         .filter(key => touched.includes(key)) // get all touched keys
         .reduce((acc, key) => {
            if (!acc[key]) {
               acc[key] = validationErrors[key];
            }
            return acc;
         }, {});
      setErrors(touchedErrors);

   }, [touched, values]);

   function handleChange(e) {
      const { name, value } = e.target;

      setValues({
         ...values,
         [name]: value
      });

      if (name === 'photo') {

         setFile(e.target.files[0]);
         setFileName(name);
         setImgUpdated(true);
      }
   }

   const handleBlur = (e) => {
      const { name } = e.target;
      if (!touched.includes(name)) {
         setTouched([
            ...touched,
            name
         ]);
      }
   };


   const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setSubmitting(true);
   };

   return {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      file,
      fileName,
      imgUpdated
   };
}

export default useFormValidation;