import React from 'react';

import TableCell from './TableCell';

function TableHeader({ headers, requestSort }) {

   return (
      <thead className="table-row">
         <tr>
            {
               headers.map((d) => {

                  return (
                     <TableCell key={d.key} data={d} onClick={() => requestSort(d.key)} />
                  );
               })
            }
         </tr>
      </thead>
   );
}
export default TableHeader;
