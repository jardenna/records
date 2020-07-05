import React from 'react';
import Form from '@formElements/Form';
import Dropdown from '@formElements/Dropdown';

import useFormValidation from '@hooks/useFormValidation';
import { validateAuth } from '@common/validateAuth';

import Context from '@commonReact/context';

import useGlobalFetch from '@hooks/useGlobalFetch';

const managerArr = 'https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json';


function Login() {
   const loginObj = {
      email: '',
      password: ''
   };
   const { result } = useGlobalFetch(managerArr, 'Get');


   const inputIdentifier = 'search-managers';

   const login = () => {
      console.log(values);
   };


   const managerData = result.data && result.data;

   const dropDownContext = {

      inputIdentifier,
      inputName: inputIdentifier,
      type: 'text',
      label: 'Select Manager',
      managerData
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


      <div>

         <Context.Provider value={dropDownContext}>
            <Dropdown />
         </Context.Provider>

         <Form
            inputs={inputs}
            btnText='Submit'
            btnClass='primary'
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
         />
      </div>
   );
}

export default Login;
