import React from 'react';
import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import { validateAuth } from '@common/validateAuth';

import Context from '@commonReact/context';
import Dropdown from './select/Dropdown';
import useGlobalFetch from '@hooks/useGlobalFetch';
import { normalizeData, addId } from '@common/normalizeData';

const managerArr = 'https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json';


function Login() {
   const loginObj = {
      email: '',
      password: ''
   };
   const { result } = useGlobalFetch(managerArr, 'Get');
   const normalResult = result && normalizeData(result.data);
   const data = normalResult && addId(normalResult);
   const inputIdentifier = 'search-managers';
   const dropDownContext = {
      result,
      inputIdentifier,
      inputName: inputIdentifier,
      type: 'text',
      label: 'Select Manager',
      data
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
