import React from 'react';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';


import Context from '@commonReact/context';
import { validateAuth } from '@common/validation/validateAuth';
import Popup from '@commonReact/Popup';


function Login() {
   const loginObj = {
      email: '',
      password: ''
   };


   const login = () => {
      console.log(values);
   };


   const testObj = [
      { id: 1, item: 'Er du sikker på at du vil slette' },
      { id: 2, item: 'Arts' },
      { id: 3, item: 'Leisure' }
   ];

   const testObj1 = [
      { id: 11, item: 'Er du sikker på at du vil slette' },
      { id: 21, item: 'Arts' }
   ];
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

   const formObj = {
      inputs,
      btnText: 'Submit',
      btnClass: 'primary',
      onSubmit: handleSubmit,
      onChange: handleChange

   };

   return (
      <Context.Provider value={formObj}>

         <div >
            {testObj1.map(genre =>
               <Popup key={genre.id}

                  id={genre.id}
                  text={genre.item}

                  callback={() => console.log(456)}
                  buttonType={'delete'}
                  deleteLinkTo={'/'}
                  triggerBtnClassName={'danger'}
                  triggerBtnText={'Slet'}
                  role={'tooltip'}
                  componentName={'tooltip'}
                  tooltipDirection={'right'}

               />
            )}

         </div>

         <div style={{ marginTop: 80 }}>
            {testObj.map(genre =>
               <Popup key={genre.id}

                  callback={() => console.log(56)}

                  id={genre.id}
                  text={genre.item}


                  buttonType={'delete'}
                  deleteLinkTo={'/'}
                  triggerBtnClassName={'danger'}
                  triggerBtnText={'Slet'}
                  role="dialog"
                  ariaType={'modal'}
                  componentName={'modal'}
                  showFooter
               />
            )}

         </div>


         <Form
            inputs={inputs}
            btnText='Submit'
            btnClass='primary'
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
         />
      </Context.Provider >

   );
}

export default Login;
