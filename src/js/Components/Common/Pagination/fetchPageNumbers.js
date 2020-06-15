import { LEFT_PAGE, RIGHT_PAGE } from './constants';

const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

export const fetchPageNumbers = (totalRecords, pageLimit, pageNeighbours, currentPage) => {

   const totalPages = Math.ceil(totalRecords / pageLimit);
   const totalNumbers = pageNeighbours * 2 + 3;
   const totalBlocks = totalNumbers + 2;

   if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;


      if (leftSpill && !rightSpill) {
         const extraPages = range(startPage - singleSpillOffset, startPage - 1);
         pages = [LEFT_PAGE, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
         const extraPages = range(endPage + 1, endPage + singleSpillOffset);
         pages = [...pages, ...extraPages, RIGHT_PAGE];
      } else if (leftSpill && rightSpill) {
         pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
      }

      return [1, ...pages, totalPages];
   }

   return range(1, totalPages);
};


