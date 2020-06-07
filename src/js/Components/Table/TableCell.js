import React from 'react';

function TableCell({ data, onClick, className }) {
   return (
      <td className={className} onClick={onClick}>
         {data.text}
      </td>
   );
}

export default TableCell;
