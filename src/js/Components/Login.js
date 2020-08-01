import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '@common/api';
import endpoints from '@common/endpoints';

import { CONTENT } from '@common/constants/content';


import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import Context from '@commonReact/context';
import { validateLogin } from '@common/validation/validateLogin';

import { NAV } from '@common/constants/content';

function Login() {
   const loginObj = {
      email: '',
      password: ''
   };


   const { register } = NAV;
   const [user, setUser] = React.useState({});

   const submit = () => {
      const url = endpoints.main + 'user/login';
      api('post', url, values)
         .then((result) => setUser(result))
         .catch(error => error);

   };

   const { handleSubmit, handleChange, handleBlur, values, errors } = useFormValidation(loginObj, submit, validateLogin);
   let history = useHistory();
   const onRegister = () => {
      history.push('/register');
   };


   const { email, password } = values;
   const { contentEmail, contentPassword } = CONTENT;

   const inputs = [

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
         <button className='btn-primary' onClick={onRegister}>{register}</button>
      </Context.Provider >

   );
}

export default Login;


