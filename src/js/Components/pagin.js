import React from 'react';

import Pagination from '@commonReact/Pagination/Pagination';
import PaginationNav from '@commonReact/Pagination/PaginationNav';
import useGlobalFetch from '@hooks/useGlobalFetch';


function Pagin() {

   const { isLoading, hasError, result } = useGlobalFetch('https://jsonplaceholder.typicode.com/posts', 'get');

   const totalRecords = result ? result.length : 1;
   //const { pageNumbers, handleMoveLeft, handleMoveRight, currentPage, handleClick } = Pagination(totalRecords, 18, 1);
   //pageLimit, totalRecords, pageNeighbours
   return (
      <div>
         <Pagination
            pageLimit={18}
            totalRecords={200}
            pageNeighbours={1}

         />
       s

      </div>
   );

}
export default Pagin;