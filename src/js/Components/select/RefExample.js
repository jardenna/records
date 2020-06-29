import React from 'react';

function RefExample({ list }) {
   return (
      <div className="input_boxes">
         {list.map(x => (
            <div>
               <input
                  key={x}
                  ref={inputRef[x]}
                  onChange={handler(x)}
                  type="number"
                  className="otp_box"
               />
            </div>
         ))}
      </div>
   );
}

export default RefExample;
