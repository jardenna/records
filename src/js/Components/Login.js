import React from 'react';
import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import { validateAuth } from '@common/validateAuth';
import Select from '@formElements/Select';


const items = [
   { id: 1, name: 'Josh Weirs' },
   { id: 2, name: 'Sarah Weir' },
   { id: 3, name: 'Alicia Weir' },
   { id: 4, name: 'Doo Weir' },
   { id: 5, name: 'Grooft Weir' }
];

const items1 = [
   { id: 1, name: 'Helle' },
   { id: 2, name: 'Sarah Weir' },
   { id: 3, name: 'Alicia Weir' },
   { id: 4, name: 'Doo Weir' },
   { id: 5, name: 'Grooft Weir' }
];
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
      <div>
         <Select items={items} id={1} test={'test'} />
         <Select items={items1} id={2} test={'test1'} />


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
