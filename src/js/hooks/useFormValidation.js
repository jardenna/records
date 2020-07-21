import React from 'react';

function useFormValidation(initialState = {}, callBack, validate, id) {
   const [values, setValues] = React.useState(initialState);
   const [errors, setErrors] = React.useState({});
   const [touched, setTouched] = React.useState([]);
   const [isSubmitting, setSubmitting] = React.useState(false);
   const [file, setFile] = React.useState('');
   const [fileName, setFileName] = React.useState('');
   const [imgUpdated, setImgUpdated] = React.useState(false);
   const [previewUrl, setPreviewUrl] = React.useState('');


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
      const reader = new FileReader();
      const { name, value, files } = e.target;


      setValues({
         ...values,
         [name]: value
      });

      if (name === 'photo') {
         const photoFile = files[0];
         // console.log(photoFile.name);
         reader.onloadend = () => {
            setPreviewUrl(reader.result);
         };
         reader.readAsDataURL(photoFile);
         setFile(photoFile);
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
      imgUpdated,
      previewUrl

   };
}

export default useFormValidation;