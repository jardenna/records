import React from 'react';

function TableCell({ data }) {
   return (
      <td className="table-cell" >
         {data.text}
      </td>
   );
}

export default TableCell;
