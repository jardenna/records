import React from 'react';

function TableCell({ data, onClick }) {

   return (
      <td className="table-cell" onClick={onClick}>
         {data.text}
      </td>
   );
}

export default TableCell;
