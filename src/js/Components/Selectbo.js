import React from 'react';
import Selectbox from './records/Shared/Selectbox/Selectbox';

import { cars } from '@data/cars';
import { selectArr } from '@data/selectArr';

let carOptions = cars.map(elm => ({ value: elm.myName }));
let selectOptions = selectArr.map(elm => ({ value: elm.myName }));

function Selectbo() {

   const callBack = (value) => {
      console.log(value);
   };
   return (
      <div>
         <Selectbox
            label="React Select"
            placeholder="Pick one"
            options={selectOptions}
            zIndex={4}
            callBack={callBack}
         />
         <Selectbox
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={3}

         />
         <Selectbox
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={2}

         />

      </div>
   );
}

export default Selectbo;
