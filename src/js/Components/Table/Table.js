import React, { useState } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { normalizeData } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';
import { useSorting } from '@hooks/useSorting';


function Table() {

   const data = cars.map((d, id) => ({ ...d, id }));
   const [headerText, setHeaderText] = useState(theadText);

   const { sortedItems, sortFunc, sortClassName } = useSorting(data);

   const tbodyData = normalizeData(sortedItems);

   return (
      <div>
         <table className="container">
            <TableHeader
               headers={headerText}
               sortFunc={sortFunc}
               sortClassName={sortClassName}
            />
            <TableBody data={tbodyData} theadText={theadText} />
         </table>

      </div>

   );
}
export default Table;
