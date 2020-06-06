import React from 'react';

import TableCell from './TableCell';

function TableData({ data, theadText }) {
   const headerOrder = theadText.map(m => m.key);
   return (
      <tbody>
         {
            data.map((row, i) => (
               <tr className="table-row" key={i}>
                  {
                     row.map((_, i) => {

                        return (
                           <TableCell key={'cell' + i}
                              data={row.find(r => r.key === headerOrder[i])}
                           />
                        );
                     }

                     )
                  }
               </tr>
            ))
         }
      </tbody>
   );
}

export default TableData;
