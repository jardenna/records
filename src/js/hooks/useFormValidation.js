import React from 'react';

function useFormValidation(initialState = {}, callBack, validate) {
   const [values, setValues] = React.useState(initialState);
   const [errors, setErrors] = React.useState({});
   const [touched, setTouched] = React.useState([]);
   const [isSubmitting, setSubmitting] = React.useState(false);


   React.useEffect(() => {
      if (isSubmitting) {
         const noErrors = Object.keys(errors).length === 0;
         if (noErrors) {
            setTouched([]);
            callBack();
            setSubmitting(false);
            setValues(initialState);
         } else {
            setSubmitting(false);
         }
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

   ////Sets errors on submit
   // function handleSubmit(e) {
   //    e.preventDefault();
   //    if (Object.keys(validate(values)).length === 0) {
   //       callBack();
   //       setValues(initialState);
   //       setErrors({});

   //    } else {
   //       setErrors(validate(values));
   //    }

   // }

   //Sets errors on blur
   const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setSubmitting(true);
   };

   return {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors
   };
}

export default useFormValidation;