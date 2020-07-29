import { CONTENT } from '@common/constants/content';
import { VALIDEMAIL } from './regex';

const { errorPassword, errorEmail, errorMatchPassword, required, contentName, contentEmail, contentPassword, contentConfirmPassword } = CONTENT;

export function validateAuth(values) {
   let errors = {};
   const { name, email, password, confirmPassword } = values;

   // Name Errors
   if (!name) {
      errors.name = required + contentName;
   }

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

   //Confirm Password
   if (!confirmPassword) {
      errors.confirmPassword = required + contentConfirmPassword;

   } else if (password !== confirmPassword) {
      errors.confirmPassword = errorMatchPassword;
   }
   return errors;
}