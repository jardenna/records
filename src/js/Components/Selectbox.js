import React from 'react';
import Select from '@formElements/SelectBox/Select';

import { cars } from '@data/cars';
import { selectArr } from '@data/selectArr';

let carOptions = cars.map(elm => ({ value: elm.myName }));
let selectOptions = selectArr.map(elm => ({ value: elm.myName }));

function Selectbox() {

   const callBack = (value) => {
      console.log(value);
   };
   return (
      <div>
         <Select
            label="React Select"
            placeholder="Pick one"
            options={selectOptions}
            zIndex={4}
            callBack={callBack}
         />
         <Select
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={3}
            callBack={callBack}
         />
         <Select
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={2}
            callBack={callBack}
         />

      </div>
   );
}

export default Selectbox;
