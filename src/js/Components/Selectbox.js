import React from 'react';
import Select from '@components/Select';
import SelectClass from '@components/SelectClass';
function Selectbox() {
   return (
      <div>
         <Select
            label="React Select"
            placeholder="Pick one"
            options={[
               { value: 'Rock' },
               { value: 'Paper' },
               { value: 'Scissors' },
               { value: 'Sass' }
            ]}

         />
         <Select
            label="React Select"
            placeholder="Pick one"
            options={[
               { value: 'Rock' },
               { value: 'Paper' },
               { value: 'Scissors' },
               { value: 'Sass' }
            ]}

         />

      </div>
   );
}

export default Selectbox;
