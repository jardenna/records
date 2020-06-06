import React from 'react';

import TableCell from './TableCell';

function TableHeader({ headers }) {

   return (
      <thead className="table-row">
         <tr>
            {
               headers.map((d) => {
                  return (
                     <TableCell key={d.key} data={d} />
                  );
               })
            }
         </tr>
      </thead>
   );
}
export default TableHeader;
