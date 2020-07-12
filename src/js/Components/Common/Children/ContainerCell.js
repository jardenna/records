import React from 'react';

function ContainerCell({ as: As, text }) {

   return (
      <As tabIndex={0} >
         {text && text}
      </As>
   );
}

export default ContainerCell;
