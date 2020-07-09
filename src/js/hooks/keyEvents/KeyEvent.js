import React from 'react';

import Label from './Label';
import useKeyPress from './useKeyPress';

function KeyEvent() {
   const [key, setKey] = React.useState('h');
   // Call our hook for each key that we'd like to monitor
   const happyPress = useKeyPress(key);
   const sadPress = useKeyPress('s');
   const robotPress = useKeyPress('r');
   const foxPress = useKeyPress('f');

   return (
      <div>
         <div>
            <button
               onClick={() => {
                  key === 'h' ? setKey('p') : setKey('h');
               }}
            >
               change to {key === 'h' ? 'p' : 'h'}
            </button>

         </div>
         <Label value={key} isBold={happyPress} />

         <Label value="s" isBold={sadPress} />
         <Label value="r" isBold={robotPress} />
         <Label value="f" isBold={foxPress} />

         <div >
            {happyPress && '😊'}
            {sadPress && 'I am sad'}
            {robotPress && '🤖'}
            {foxPress && '🦊'}
         </div>
      </div>
   );
}

export default KeyEvent;