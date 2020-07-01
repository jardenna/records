import React from 'react';

import TableCell from './TableCell';

function TableBody({ data, iterator }) {

   return (
      <tbody>
         {
            data.map((row, i) => {

               return (
                  <tr className="table-row" key={i}>
                     {
                        row.map((_, i) => {

                           return (
                              <TableCell key={'cell' + i}
                                 data={row.find(r => r.key === iterator[i])}

                              />
                           );
                        }

                        )
                     }
                  </tr>
               );
            })
         }
      </tbody>
   );
}

export default TableBody;
