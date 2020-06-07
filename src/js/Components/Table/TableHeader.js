import React from 'react';

import TableCell from './TableCell';

function TableHeader({ headers, sortFunc, sortClassName }) {

   return (
      <thead className="table-row">
         <tr>
            {
               headers.map((d) => {
                  return (
                     <TableCell
                        key={d.key}
                        data={d}
                        onClick={() => sortFunc(d.key)}
                        className={sortClassName(d.key)}

                     />
                  );
               })
            }
         </tr>
      </thead>
   );
}
export default TableHeader;
