import React from 'react';

import { LEFT_PAGE, RIGHT_PAGE } from './constants';

function PaginationNav({ pageNumbers, handleMoveLeft, handleMoveRight, currentPage, handleClick }) {

   return (
      <nav>
         <ul className="pagination flex-wrapper">
            {pageNumbers.map((pageNumber, i) => {

               if (pageNumber === LEFT_PAGE)
                  return (
                     <li key={i} className="flex-item page-item">
                        <a
                           className="page-link"
                           href="#"
                           aria-label="Previous"
                           onClick={handleMoveLeft}
                        >
                           <span>&laquo;</span>

                        </a>
                     </li>
                  );

               if (pageNumber === RIGHT_PAGE)
                  return (
                     <li key={i} className="flex-item page-item">
                        <a
                           className="page-link"
                           href="#"
                           aria-label="Next"
                           onClick={handleMoveRight}
                        >
                           <span>&raquo;</span>

                        </a>
                     </li>
                  );

               return (
                  <li
                     key={i}
                     className={`flex-item page-item ${
                        currentPage === pageNumber ? ' active' : ''
                        }`}
                  >
                     <a
                        className="page-link"
                        href="#"
                        onClick={e => handleClick(pageNumber, e)}
                     >
                        {pageNumber}
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}

export default PaginationNav;
