import React from 'react';
import Selectbox from '@formElements/Selectbox/Selectbox';
import Context from '@commonReact/context';

import { cars } from '@data/cars';
import { selectArr } from '@data/selectArr';

let carOptions = cars.map(elm => ({ value: elm.myName }));
let selectOptions = selectArr.map(elm => ({ value: elm.myName }));

function Selectbo() {



   const initObj = {
      options: selectArr

   };
   return (
      <Context.Provider value={initObj}>
         <Selectbox
            label="React Select"
            placeholder="Pick one"
            options={selectOptions}
            zIndex={4}

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

      </Context.Provider>
   );
}

export default Selectbo;
