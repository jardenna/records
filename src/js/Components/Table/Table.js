import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { normalizeData, addId } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';
import { objKeys } from '@utils/iteratorList';



//Creating an iterator for mapping data
const iterator = ['id', ...objKeys(cars)];

function Table() {
   const tbodyData = normalizeData(addId(cars));

   return (
      <div>
         <table className="container">
            <TableHeader
               headers={theadText}
            />
            <TableBody data={tbodyData} theadText={theadText} iterator={iterator} />
         </table>

      </div>

   );
}
export default Table;
