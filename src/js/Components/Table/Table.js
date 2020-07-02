import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { normalizeData, addId } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';
import { selectArr } from '@data/selectArr';
import { objKeys } from '@utils/iteratorList';

//Creating an iterator for mapping data
const iterator = [...objKeys(cars)];

function Table() {
   const tbodyData = normalizeData(addId(cars));
   const divData = normalizeData(addId(selectArr));

   return (
      <div>

         <TableBody
            data={divData}
            iterator={iterator}
            as={'section'}
            asChild={'div'}
            container={'section'}
         />


         <table className="container">
            <TableHeader
               headers={theadText}
            />

            <TableBody
               data={tbodyData}
               iterator={iterator}
               as={'tr'}
               asChild={'td'}
               container={'tbody'}
            />

         </table>

      </div>

   );
}
export default Table;
