import React from 'react';
import { connect } from 'react-redux';

import { labels, noInfo } from '@data/labels';
import { fetchAllRecordsStart } from '@redux/actions/recordsActions';
import { recordDeleted } from '@redux/actions/recordsActions';
import DetailsLink from '@components/records/Shared/DetailsLink';
import Modal from '@commonReact/Modal';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import { useSorting } from '@hooks/useSorting';
import Button from '@commonReact/Button';
import Search from '@commonReact/Search';
import Selectbox from '@formElements/Selectbox';
import usePagination from '@hooks/usePagination';

import useFilter from '@hooks/useFilter';

function RecordTable({ fetchAllRecordsStart, allRecords, error, isLoading, recordDeleted }) {

   React.useEffect(() => {
      fetchAllRecordsStart();
   }, []);

   const searchObj = {
      artist: '',
      title: '',
      label: '',
      origin: ''
   };

   const { sortedItems, sortFunc, sortClassName } = useSorting(allRecords);
   const { handleChange, values, handleEmptyInput, filteredText } = useFilter(searchObj, sortedItems);
   const { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage } = usePagination(filteredText, 20, 6);

   const LEFT_PAGE = 'LEFT';
   const RIGHT_PAGE = 'RIGHT';
   if (isLoading) {
      return <Loader />;
   }

   if (error) {
      return <Error />;
   }

   return (
      <div>

         <table className="record-table">
            <thead>
               <tr>

                  <th>
                     <Button
                        type='button'
                        id={labels.artist}
                        text={labels.artist}
                        className={sortClassName('artist')}
                        onClick={() => sortFunc('artist')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.artist}
                        name='artist'
                        onClick={handleEmptyInput}

                     />
                  </th>
                  <th>
                     <Button
                        type='button'
                        id={labels.title}
                        text={labels.title}
                        className={sortClassName('title')}
                        onClick={() => sortFunc('title')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.title}
                        name='title'
                        onClick={handleEmptyInput}

                     />
                  </th>
                  <th>
                     <Button
                        type='button'
                        id={labels.prodYear}
                        text={labels.prodYear}
                        className={sortClassName('prodYear')}
                        onClick={() => sortFunc('prodYear')}
                     />

                  </th>
                  <th>
                     <Button
                        type='button'
                        id={labels.label}
                        text={labels.label}
                        className={sortClassName('label')}
                        onClick={() => sortFunc('label')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.label}
                        name='label'
                        onClick={handleEmptyInput}
                     />
                  </th>

                  <th>
                     <Button
                        type='button'
                        id={labels.origin}
                        text={labels.origin}
                        className={sortClassName('origin')}
                        onClick={() => sortFunc('origin')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.origin}
                        name='origin'
                        onClick={handleEmptyInput}
                     />

                  </th>


                  <th>Antal plader <span>{allRecords && allRecords.length}</span></th>
               </tr>
            </thead>
            <tbody>

               {currentData(filteredText).map(record =>

                  <tr id={record._id} key={record._id}>
                     <td className="first-td" data-label={labels.artist}>{record.artist}</td>
                     <td data-label={labels.title}>{record.title}</td>
                     <td data-label={labels.prodYear}>{record.prodYear}</td>
                     <td data-label={labels.label}>{record.label === null || record.label === '' ? noInfo : record.label}</td>
                     <td data-label={labels.origin}>{record.origin === null || record.origin === '' ? noInfo : record.origin}</td>

                     <td>
                        <DetailsLink id={record._id} />

                        <Modal
                           onClick={() => recordDeleted(record._id)}
                           title={record.title}
                           artist={record.artist}
                           id={record._id}
                           linkTo={'/all'}

                        />
                     </td>
                  </tr>

               )}
            </tbody>

         </table>

         <section className="pagination">
            <ul className="pagination-numbers">
               <li

                  className={`pagination-chevron ${currentPage === 1 ? 'disabled' : ''}`}
                  aria-disabled={currentPage === 1 && true}
               >
                  <a href="#" onClick={prevPage}>

                     <span
                        aria-label="Jump Previous"
                        className="screen-reader"
                     >
                        Jump Previous
                  </span>
                     <span className="chevron-left" aria-hidden="true" />
                  </a>

               </li>
               {pages.map((page, index) => {
                  if (page === LEFT_PAGE)
                     return (
                        <li
                           key={index}
                           className="page-item"
                           aria-label="Previous"

                        >
                           <a href="#" onClick={prev}>
                              <span aria-hidden="true">...</span>
                              <span className="screen-reader">Previous</span>
                           </a>
                        </li>
                     );

                  if (page === RIGHT_PAGE)
                     return (
                        <li
                           key={index}
                           className=" page-item"

                        >
                           <a href="#" onClick={next}>
                              <span aria-hidden="true">...</span>
                              <span className="screen-reader">Next</span>
                           </a>
                        </li>
                     );

                  return (
                     <li
                        key={index}


                     >
                        <a
                           href="#"
                           aria-label="Next"
                           onClick={e => jump(e, page)}
                           className={`page-item${
                              currentPage === page ? ' active' : ''
                              }`}
                        >
                           {page}
                        </a>


                     </li>
                  );
               })}
               <li

                  className={`pagination-chevron ${currentPage === maxPage ? 'disabled' : ''}`}>
                  <a href="#" className="last-of-type" onClick={nextPage}>
                     <span
                        aria-label="Jump Next"
                        className="screen-reader"
                     >
                        Jump Next
                  </span>
                     <span className="chevron-right" aria-hidden="true" />
                  </a>
               </li>
            </ul>
         </section>
         <Selectbox />

      </div >
   );
}


const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords,
   error: state.records.error,
   isLoading: state.records.isLoading
});



export default connect(mapStateToProps, { recordDeleted, fetchAllRecordsStart })(RecordTable);