import React from 'react';

import { LEFT_PAGE, RIGHT_PAGE } from './constants';
import { fetchPageNumbers } from './fetchPageNumbers';

import PaginationNav from './PaginationNav';

const onPageChanged = data => {

   const { currentPage, pageLimit, allCountries } = data;

   const offset = (currentPage - 1) * pageLimit;
   const currentCountries = allCountries.slice(offset, offset + pageLimit);

   return (
      currentCountries
   );
};


function Pagination({ pageLimit, totalRecords, pageNeighbours }) {

   const [currentPage, setCurrentPage] = React.useState(1);
   React.useEffect(() => {

      const paginationData = {
         currentPage,
         totalPages,
         pageLimit,
         allCountries: []
      };

      () => onPageChanged(paginationData);
   }, []);

   const gotoPage = page => {

      const totalPages = Math.ceil(totalRecords / pageLimit);

      const currentPage = Math.max(0, Math.min(page, totalPages));

      setCurrentPage(currentPage);

   };


   const handleClick = (page, e) => {
      e.preventDefault();
      gotoPage(page);
   };

   const handleMoveLeft = e => {
      e.preventDefault();
      gotoPage(currentPage - pageNeighbours * 2 - 1);
   };

   const handleMoveRight = e => {
      e.preventDefault();
      gotoPage(currentPage + pageNeighbours * 2 + 1);
   };


   const totalPages = Math.ceil(totalRecords / pageLimit);
   if (totalPages === 1) return null;


   // const pageNumbers = [1, 2, 3];
   const pageNumbers = fetchPageNumbers(totalRecords, pageLimit, pageNeighbours, currentPage);


   return (
      <div>
         <PaginationNav
            pageNumbers={pageNumbers}
            handleMoveLeft={handleMoveLeft}
            handleMoveRight={handleMoveRight}
            currentPage={currentPage}
            handleClick={handleClick}

         />

      </div>

   );
}




export default Pagination;