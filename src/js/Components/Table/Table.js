import React, { useState, useEffect } from 'react';

import TableHeader from './TableHeader';
import TableData from './TableData';

import { normalizeData } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';


const data = cars.map((d, id) => ({ ...d, id }));
function Table() {


   const [headerText, setHeaderText] = useState(theadText);
   const [tableData, setTableData] = useState([]);


   useEffect(() => {
      // normalize data
      setTableData(normalizeData(data), theadText);
   }, []);



   return (
      <table className="container">
         <TableHeader headers={headerText} />
         <TableData data={tableData} theadText={theadText} />
      </table>
   );
}
export default Table;
