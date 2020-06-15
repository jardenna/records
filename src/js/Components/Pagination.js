import React from 'react';


const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';



const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

const fetchPageNumbers = (currentPage) => {

   const pageNeighbours = 1;
   const totalPages = Math.ceil(200 / 18);
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


const onPageChanged = data => {

   const { currentPage, pageLimit, allCountries } = data;

   const offset = (currentPage - 1) * pageLimit;
   const currentCountries = allCountries.slice(offset, offset + pageLimit);

   return (
      currentCountries
   );
};

function Pagination({ pageLimit, totalRecords, pageNeighbours, itemsPerPage }) {

   const [currentPage, setCurrentPage] = React.useState(1);
   React.useEffect(() => {

      const paginationData = {
         currentPage,
         totalPages,
         pageLimit,
         allCountries: []
      };

      () => onPageChanged(paginationData);
   });

   const gotoPage = page => {

      const totalPages = Math.ceil(totalRecords / pageLimit);

      const currentPage = Math.max(0, Math.min(page, totalPages));

      setCurrentPage(currentPage);

   };



   const handleClick = (page, evt) => {
      evt.preventDefault();
      gotoPage(page);
   };

   const handleMoveLeft = evt => {
      evt.preventDefault();
      gotoPage(currentPage - pageNeighbours * 2 - 1);
   };

   const handleMoveRight = evt => {
      evt.preventDefault();
      gotoPage(currentPage + pageNeighbours * 2 + 1);
   };


   const totalPages = Math.ceil(totalRecords / pageLimit);
   if (totalPages === 1) return null;


   const pages = fetchPageNumbers(currentPage);


   return (

      <nav aria-label="Countries Pagination">
         <ul className="pagination flex-wrapper">
            {pages.map((page, index) => {
               if (page === LEFT_PAGE)
                  return (
                     <li key={index} className="flex-item page-item">
                        <a
                           className="page-link"
                           href="#"
                           aria-label="Previous"
                           onClick={handleMoveLeft}
                        >
                           <span aria-hidden="true">&laquo;</span>
                           <span className="sr-only">Previous</span>
                        </a>
                     </li>
                  );

               if (page === RIGHT_PAGE)
                  return (
                     <li key={index} className="flex-item page-item">
                        <a
                           className="page-link"
                           href="#"
                           aria-label="Next"
                           onClick={handleMoveRight}
                        >
                           <span aria-hidden="true">&raquo;</span>
                           <span className="sr-only">Next</span>
                        </a>
                     </li>
                  );

               return (
                  <li
                     key={index}
                     className={`flex-item page-item${
                        currentPage === page ? ' active' : ''
                        }`}
                  >
                     <a
                        className="page-link"
                        href="#"
                        onClick={e => handleClick(page, e)}
                     >
                        {page}
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>

   );
}




export default Pagination;