import React from 'react';
//import { connect } from 'react-redux';
import api from '@common/api';
import endpoints from '@common/endpoints';
import { CONTENT } from '@common/constants/content';
// import Loader from '@commonReact/Loader';
// import Error from '@commonReact/Error';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import Context from '@commonReact/context';
import { validateAuth } from '@common/validation/validateAuth';


function Register() {
   const loginObj = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
   };

   const [user, setUser] = React.useState('');



   const submit = () => {
      const url = endpoints.main + 'user/signup';
      api('post', url, values)
         .then((result) => setUser(result));
   };

   const { handleSubmit, handleChange, handleBlur, values, errors } = useFormValidation(loginObj, submit, validateAuth);
   //console.log(user);
   const { email, password, name, confirmPassword } = values;
   const { contentName, contentEmail, contentPassword, contentConfirmPassword } = CONTENT;

   const inputs = [
      {
         type: 'text',
         name: 'name',
         inputIdentifier: 'name',
         label: contentName,
         isRequired: true,
         value: name,
         error: errors.name
      },
      {
         type: 'text',
         name: 'email',
         inputIdentifier: 'email',
         label: contentEmail,
         isRequired: true,
         value: email,
         error: errors.email
      },
      {
         type: 'text',
         name: 'password',
         inputIdentifier: 'password',
         label: contentPassword,
         isRequired: true,
         value: password,
         error: errors.password
      },
      {
         type: 'text',
         name: 'confirmPassword',
         inputIdentifier: 'confirmPassword',
         label: contentConfirmPassword,
         isRequired: true,
         value: confirmPassword,
         error: errors.confirmPassword
      }

   ];

   const formObj = {
      inputs,
      btnText: 'Log in',
      btnClass: 'primary',
      onSubmit: handleSubmit,
      onChange: handleChange,
      onBlur: handleBlur

   };

   return (
      <Context.Provider value={formObj}>


         <Form />


      </Context.Provider >

   );
}

export default Register;
