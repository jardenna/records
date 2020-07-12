import React from 'react';
import Select from '@formElements/SelectBox/Select';
import { cars } from '@data/cars';
import { selectArr } from '@data/selectArr';

let carOptions = cars.map(elm => ({ value: elm.myName }));
let selectOptions = selectArr.map(elm => ({ value: elm.myName }));

function Selectbox() {
   return (
      <div>
         <Select
            label="React Select"
            placeholder="Pick one"
            options={selectOptions}
            zIndex={4}
         />
         <Select
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={3}
         />
         <Select
            label="React Select"
            placeholder="Pick one"
            options={carOptions}
            multiple
            zIndex={2}
         />

      </div>
   );
}

export default Selectbox;
