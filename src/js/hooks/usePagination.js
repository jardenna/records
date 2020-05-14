import React from 'react';

function usePagination(data, itemsPerPage) {
   const [currentPage, setCurrentPage] = React.useState(1);
   const maxPage = Math.ceil(data.length / itemsPerPage);

   function next() {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
   }

   function prev() {
      setCurrentPage((currentPage) => Math.min(currentPage - 1, currentPage));
   }

   function jump(page) {
      const pageNumber = Math.max(1, page);
      setCurrentPage(() => Math.min(pageNumber, maxPage));
   }

   function currentData() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
   }

   return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
