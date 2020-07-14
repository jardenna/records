import React from 'react';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import useToggle from '@hooks/useToggle';

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

   const genres = ['Adventure', 'Arts', 'Leisure', 'Nature'];
   const [toggle, selected] = useToggle([]);





   return (
      <div>
         {genres.map((genre, i) =>
            <div key={i}>
               <div onClick={() => toggle(genre)}>
                  klik

            </div>

               <div className={selected.includes(genre) ? 'hidden' : null}>
                  genre
               </div>
            </div>
         )}


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
