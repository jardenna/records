import React from 'react';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import { validateAuth } from '@common/validateAuth';


function Login() {
   const loginObj = {
      email: '',
      password: ''
   };


   const login = () => {
      console.log(values);
   };



   const { handleSubmit, handleChange, handleBlur, values, errors } = useFormValidation(loginObj, login, validateAuth);
   const { email, password } = values;

   const inputs = [
      {
         type: 'text',
         name: 'email',
         inputIdentifier: 'email',
         label: 'Email',
         isRequired: true,
         value: email,
         error: errors.email
      },
      {
         type: 'text',
         name: 'password',
         inputIdentifier: 'password',
         label: 'Password',
         isRequired: true,
         value: password,
         error: errors.password

      }
   ];
   return (
      <Form
         inputs={inputs}
         btnText='Submit'
         btnClass='primary'
         onSubmit={handleSubmit}
         onChange={handleChange}
         onBlur={handleBlur}
      />

   );
}

export default Login;
