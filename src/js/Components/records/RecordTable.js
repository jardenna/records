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
import PaginationNav from '@commonReact/Pagination/PaginationNav';
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

   const { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage } = usePagination(filteredText, 5, 2);

   if (isLoading) {
      return <Loader />;
   }

   if (error) {
      return <Error />;
   }

   return (
      <React.Fragment>
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
         <PaginationNav
            next={next}
            prev={prev}
            jump={jump}
            currentPage={currentPage}
            maxPage={maxPage}
            pages={pages}
            nextPage={nextPage}
            prevPage={prevPage}
         />



      </React.Fragment >
   );
}


const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords,
   error: state.records.error,
   isLoading: state.records.isLoading
});

export default connect(mapStateToProps, { recordDeleted, fetchAllRecordsStart })(RecordTable);