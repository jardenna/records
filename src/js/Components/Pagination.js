import React, { Component } from 'react';


const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
   let i = from;
   const range = [];

   while (i <= to) {
      range.push(i);
      i += step;
   }

   return range;
};
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

class Pagination extends Component {
   constructor(props) {
      super(props);
      const totalPages = Math.ceil(200 / 18);

      this.state = {
         currentPage: 1,
         totalPages,
         pageLimit: 18
      };
   }

   gotoPage = page => {
      const { onPageChanged = f => f } = this.props;
      const { totalPages, pageLimit } = this.state;

      const currentPage = Math.max(0, Math.min(page, totalPages));

      const paginationData = {
         currentPage,
         totalPages,
         pageLimit
      };

      this.setState({ currentPage }, () => onPageChanged(paginationData));
   };


   handleClick = (page, evt) => {
      evt.preventDefault();
      this.gotoPage(page);
   };

   handleMoveLeft = evt => {
      evt.preventDefault();
      this.gotoPage(this.state.currentPage - this.props.pageNeighbours * 2 - 1);
   };

   handleMoveRight = evt => {
      evt.preventDefault();
      this.gotoPage(this.state.currentPage + this.props.pageNeighbours * 2 + 1);
   };



   render() {
      const { totalPages, currentPage } = this.state;


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
                              onClick={this.handleMoveLeft}
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
                              onClick={this.handleMoveRight}
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
                           onClick={e => this.handleClick(page, e)}
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
}



export default Pagination;