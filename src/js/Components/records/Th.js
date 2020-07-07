import React from 'react';

import Button from '@commonReact/Button';
import Search from '@commonReact/Search';


function Th({ className, sortFunc, handleEmptyInput, id, labels, onChange, value, name }) {
   return (
      <th>
         <Button
            type='button'
            id={id}
            text={labels}
            className={className}
            onClick={sortFunc}
         />
         <Search
            onChange={onChange}
            value={value}
            name={name}
            onClick={handleEmptyInput}
         />
      </th>
   );
}

export default Th;
