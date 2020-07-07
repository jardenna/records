import React from 'react';
import Select from '@components/Select';
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
            label="React Multiple Select"
            placeholder="Pick some"
            options={[
               { value: 'Rock' },
               { value: 'Paper' },
               { value: 'Scissors' }
            ]}
            multiple
         />
      </div>
   );
}

export default Selectbox;
