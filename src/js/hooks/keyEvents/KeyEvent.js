import React from 'react';

import useKey from '@hooks/useKey';

function KeyEvent() {

   const sadPress = useKey('s');
   const robotPress = useKey('r');
   const foxPress = useKey('f');
   if (sadPress) {
      console.log(145);
   }
   return (
      <div>
         <p>s r f</p>
         {sadPress && 'I am sad'}
         {robotPress && '🤖'}
         {foxPress && '🦊'}
      </div>

   );
}

export default KeyEvent;