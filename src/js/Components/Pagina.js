import React from 'react';

import Pagination from '@commonReact/Pagination/Pagination';
import PaginationNav from '@commonReact/Pagination/PaginationNav';
import usePagina from '@commonReact/Pagination/usePagina';
import useGlobalFetch from '@hooks/useGlobalFetch';


function Pagina() {

   const { isLoading, hasError, result } = useGlobalFetch('https://jsonplaceholder.typicode.com/posts', 'get');

   const totalRecords = result ? result.length : 1;
   //const { pageNumbers, handleMoveLeft, handleMoveRight, currentPage, handleClick } = usePagina(totalRecords, 18, 1);

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
export default Pagina;