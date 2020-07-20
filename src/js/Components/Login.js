import React from 'react';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import useToggle from '@hooks/useToggle';

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

   const onTest = (value) => {
      console.log(value);
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
   const [toggle, selected, submit, onBlur] = useToggle([], onTest);



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
      onChange: handleChange,
      onBlur: handleBlur
   };

   return (
      <Context.Provider value={formObj}>

         <div >
            {testObj1.map(genre =>
               <Popup key={genre.id}
                  onClick={() => toggle(genre.id)}
                  selected={selected}
                  id={genre.id}
                  text={genre.item}
                  onBlur={onBlur}
                  submit={() => submit(genre.id)}
                  buttonType={'delete'}
                  deleteLinkTo={'/'}
                  triggerBtnClassName={'danger'}
                  triggerBtnText={'Slet'}
                  role={'tooltip'}
                  componentName={'tooltip'}
                  focus={focus === genre.id - 1}
               />
            )}

         </div>

         <div style={{ marginTop: 80 }}>
            {testObj.map(genre =>
               <Popup key={genre.id}
                  onClick={() => toggle(genre.id)}
                  selected={selected}
                  id={genre.id}
                  text={genre.item}
                  onBlur={onBlur}
                  submit={() => submit(genre.id)}
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
