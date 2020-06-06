import React, { useState, useEffect } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { normalizeData } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';

const useSortableData = (items, config = null) => {
   const [sortConfig, setSortConfig] = React.useState(config);

   const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
         sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
               return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
               return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
         });
      }


      return sortableItems;
   }, [items, sortConfig]);

   const requestSort = (key) => {
      let direction = 'ascending';
      if (
         sortConfig &&
         sortConfig.key === key &&
         sortConfig.direction === 'ascending'
      ) {
         direction = 'descending';
      }
      setSortConfig({ key, direction });
   };

   return { items: sortedItems, requestSort, sortConfig };
};

function Table() {

   const data = cars.map((d, id) => ({ ...d, id }));
   const [headerText, setHeaderText] = useState(theadText);

   const { items, requestSort, sortConfig } = useSortableData(data);

   const a = normalizeData(items);






   return (
      <table className="container">
         <TableHeader headers={headerText} requestSort={requestSort} />
         <TableBody data={a} theadText={theadText} />
      </table>
   );
}
export default Table;
