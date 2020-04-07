import React from 'react';

function Label(props) {
   return (
      <label
         className={props.className}
         htmlFor={props.htmlFor}>

         {props.label}
         {props.text}
      </label>

   );
}

export default Label;
