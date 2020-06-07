import React from 'react';
const range = (from, to, step = 1) => {
   let i = from;
   const range = [];

   while (i <= to) {
      range.push(i);
      i += step;
   }

   return range;
};

function usePagination(data, itemsPerPage, maxNumbers) {
   const [currentPage, setCurrentPage] = React.useState(1);
   const maxPage = Math.ceil(data.length / itemsPerPage);

   function createPageNumbers() {
      const pageNeighbours = 2;
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(maxPage - 1, currentPage + pageNeighbours);

      const totalNumbers = (pageNeighbours * 2) + 3;

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (maxPage - endPage) > 1;
      const spillOffset = totalNumbers - (maxNumbers + 1);
      const LEFT_PAGE = 'LEFT';
      const RIGHT_PAGE = 'RIGHT';

      let pages = range(startPage, endPage);
      switch (true) {
         // handle: (1) < {5 6} [7] {8 9} (10)
         case (hasLeftSpill && !hasRightSpill): {
            const extraPages = range(startPage - spillOffset, startPage - 1);
            pages = [LEFT_PAGE, ...extraPages, ...pages];
            break;
         }

         // handle: (1) {2 3} [4] {5 6} > (10)
         case (!hasLeftSpill && hasRightSpill): {
            const extraPages = range(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, RIGHT_PAGE];
            break;
         }

         // handle: (1) < {4 5} [6] {7 8} > (10)
         case (hasLeftSpill && hasRightSpill):
         default: {
            pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
            break;
         }
      }


      const test = [1, ...pages, maxPage];
      return test;
   }



   function next() {
      setCurrentPage(() => Math.min(currentPage + 1, maxPage));
   }

   function prev() {
      setCurrentPage(() => Math.min(currentPage - 1, currentPage));
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



   return { next, prev, jump, currentData, currentPage, maxPage, createPageNumbers };
}

export default usePagination;
