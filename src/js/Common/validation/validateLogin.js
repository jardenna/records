import { CONTENT } from '@common/constants/content';
import { VALIDEMAIL } from './regex';

const { errorPassword, errorEmail, required, contentEmail, contentPassword } = CONTENT;

export function validateLogin(values) {
   let errors = {};
   const { email, password } = values;


   // Email Errors
   if (!email) {
      errors.email = required + contentEmail;
   } else if (!VALIDEMAIL.test(email)) {
      errors.email = errorEmail;
   }
   // Password Errors
   if (!password) {
      errors.password = required + contentPassword;
   } else if (password.length < 6) {
      errors.password = errorPassword;
   }


   return errors;
}