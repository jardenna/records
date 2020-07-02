import React from 'react';

function ContainerCell({ as: As, text }) {

   return (
      <As>
         {text && text}
      </As>
   );
}

export default ContainerCell;
