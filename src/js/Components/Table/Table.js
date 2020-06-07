import React, { useState } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { normalizeData } from '@common/normalizeData';
import { cars, theadText } from '@data/cars';
import { useSorting } from '@hooks/useSorting';
import usePagination from '@hooks/usePagination';

function Table() {

   const data = cars.map((d, id) => ({ ...d, id }));
   const [headerText, setHeaderText] = useState(theadText);

   const { sortedItems, sortFunc, sortClassName } = useSorting(data);

   const tbodyData = normalizeData(sortedItems);
   const { next, prev, jump, currentData, currentPage,
      maxPage, pageNumbers, createPageNumbers } = usePagination(tbodyData, 2, 2);




   return (
      <div>
         <table className="container">
            <TableHeader
               headers={headerText}
               sortFunc={sortFunc}
               sortClassName={sortClassName}
            />
            <TableBody data={tbodyData} theadText={theadText} />
         </table>
         <section className="pagination">
            <ul className="pagination-numbers">
               <li onClick={prev} className={currentPage === 1 ? 'disabled' : ''}>Prev</li>
               {createPageNumbers().map(pageNumber => {

                  return (
                     <li
                        key={pageNumber}
                        onClick={() => jump(pageNumber)}
                        className={currentPage === pageNumber ? 'active' : ''}
                     >
                        {pageNumber}
                     </li>
                  );

               })}
               <li onClick={next} className={currentPage === maxPage ? 'disabled' : ''}>next</li>
            </ul>
         </section>
      </div>

   );
}
export default Table;
