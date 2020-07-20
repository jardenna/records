import { CONTENT } from '@common/constants/content';
import { VALIDEMAIL } from './regex';

const { errorLogin } = CONTENT;

export function validateAuth(values) {
   let errors = {};
   // Email Errors
   if (!values.email) {
      errors.email = 'Required Email';
   } else if (!VALIDEMAIL.test(values.email)) {
      errors.email = 'Invalid email address';
   }
   // Password Errors
   if (!values.password) {
      errors.password = 'Required Password';
   } else if (values.password.length < 6) {
      errors.password = errorLogin;
   }
   return errors;
}