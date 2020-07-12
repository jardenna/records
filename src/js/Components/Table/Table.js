import React from 'react';

import TableHeader from './TableHeader';
import { normalizeData, addId } from '@common/normalizeData';
import Container from '@commonReact/Children/Container';
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
         <Container
            data={divData}
            iterator={iterator}
            as={'div'}
            asChild={'p'}
            container={'section'}
            className={'table-row'}
         />

         <table className="container">
            <TableHeader
               headers={theadText}
            />

            <Container
               data={tbodyData}
               iterator={iterator}
               as={'tr'}
               asChild={'td'}
               container={'tbody'}
               className={'table-row'}
            />

         </table>

      </div>

   );
}

export default Table;
