import React from 'react';
import { connect } from 'react-redux';

import { labels } from '@data/labels';
import { CONTENT } from '@common/constants/content';
import { fetchAllRecordsStart } from '@redux/actions/recordsActions';
import { recordDeleted } from '@redux/actions/recordsActions';
import DetailsLink from '@components/records/Shared/DetailsLink';
import Popup from '@commonReact/Popup';
import Loader from '@commonReact/Loader';
import { useSorting } from '@hooks/useSorting';
import Button from '@commonReact/Button';
import Search from '@commonReact/Search';
import Selectbox from '@formElements/Selectbox/Selectbox';
import PaginationNav from '@commonReact/Pagination/PaginationNav';
import usePagination from '@hooks/usePagination';
import useToggle from '@hooks/useToggle';
import useFilter from '@hooks/useFilter';

function RecordTable({ fetchAllRecordsStart, allRecords, isLoading, recordDeleted }) {

   React.useEffect(() => {
      fetchAllRecordsStart();
   }, []);

   const searchObj = {
      artist: '',
      title: '',
      test: '',
      label: '',
      origin: ''
   };

   const [rowsCount, setRowsCount] = React.useState(10);
   const { sortedItems, sortFunc, sortClassName } = useSorting(allRecords);

   const [toggle, selected] = useToggle([]);
   const { handleChange, values, handleEmptyInput, filteredText } = useFilter(searchObj, sortedItems);

   const { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage } = usePagination(filteredText, rowsCount, 2);

   const onToggleInput = (value) => {
      toggle(value);
      handleEmptyInput(value);
   };

   const onDelete = id => {
      recordDeleted(id);

   };

   const selectArr = [{ value: 10 }, { value: 20 }, { value: 50 }, { value: 'Show all' }];
   const rowLength = filteredText.length !== 0;
   if (isLoading) {
      return <Loader />;
   }

   const { noInfo, deleteText, noFoundRecord, deleteRecord, pagesNum, records, numOfRecords } = CONTENT;
   const disabled = filteredText.length < rowsCount;

   const callBack = (value) => {
      setRowsCount(value);
   };

   return (
      <React.Fragment>

         <table className="record-table mobile-margin">
            <thead>
               <tr>
                  <th>
                     <Button
                        id={labels.artist}
                        btnText={labels.artist}
                        className={sortClassName('artist')}
                        onClick={() => sortFunc('artist')}
                     />

                     <Search
                        onChange={handleChange}
                        value={values.artist}
                        name='artist'
                        onClick={handleEmptyInput}
                        onToggleInput={() => onToggleInput('artist')}
                        classNameHidden={!selected.includes('artist') ? 'hidden' : 'hidden max'}
                     />
                  </th>
                  <th>
                     <Button

                        id={labels.title}
                        btnText={labels.title}
                        className={sortClassName('title')}
                        onClick={() => sortFunc('title')}
                     />

                     <Search
                        onChange={handleChange}
                        value={values.title}
                        name='title'
                        onClick={handleEmptyInput}
                        onToggleInput={() => onToggleInput('title')}
                        classNameHidden={!selected.includes('title') ? 'hidden' : 'hidden max'}
                     />
                  </th>
                  <th>
                     <Button
                        id={labels.prodYear}
                        btnText={labels.prodYear}
                        className={sortClassName('prodYear')}
                        onClick={() => sortFunc('prodYear')}
                     />

                     <Search
                        onChange={handleChange}
                        name='test'
                        onClick={handleEmptyInput}
                        value={values.test}
                        onToggleInput={() => onToggleInput('test')}
                        classNameHidden={!selected.includes('test') ? 'hidden' : 'hidden max'}
                     />
                  </th>
                  <th>
                     <Button

                        id={labels.label}
                        btnText={labels.label}
                        className={sortClassName('label')}
                        onClick={() => sortFunc('label')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.label}
                        name='label'
                        onClick={handleEmptyInput}
                        onToggleInput={() => onToggleInput('label')}
                        classNameHidden={!selected.includes('label') ? 'hidden' : 'hidden max'}

                     />
                  </th>

                  <th>
                     <Button
                        id={labels.origin}
                        btnText={labels.origin}
                        className={sortClassName('origin')}
                        onClick={() => sortFunc('origin')}
                     />
                     <Search
                        onChange={handleChange}
                        value={values.origin}
                        name='origin'
                        onClick={handleEmptyInput}
                        onToggleInput={() => onToggleInput('origin')}
                        classNameHidden={!selected.includes('origin') ? 'hidden' : 'hidden max'}
                     />
                  </th>

                  <th><span className="th-info">{numOfRecords} {allRecords && allRecords.length}</span></th>
               </tr>
            </thead>
            {rowLength ?
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
                           <Popup
                              callback={() => onDelete(record._id)}
                              content={record.title}
                              header={record.artist}
                              text={deleteText}
                              buttonType="delete"
                              id={record._id}
                              triggerBtnClassName="danger"
                              triggerBtnText={deleteRecord}
                              role="dialog"
                              ariaType="modal"
                              componentName="modal"
                              showFooter
                           />
                        </td>
                     </tr>

                  )}
               </tbody> : <tbody><tr><td colSpan="6" className="td-info">{noFoundRecord}</td></tr></tbody>}

         </table>
         {rowLength &&
            <div className="flex-wrapper">
               <div className="flex-4">
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
               </div>
               <div className="flex-item">
                  {currentPage} af  {maxPage} {pagesNum} / {filteredText.length} {records}

                  <div className={`${disabled ? 'disabled' : ''} record-table-select`}>
                     <Selectbox
                        placeholder={rowsCount}
                        options={selectArr}
                        callBack={callBack}
                     />

                  </div>

               </div>
            </div>}
      </React.Fragment >
   );
}


const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords,
   error: state.records.error,
   isLoading: state.records.isLoading
});

export default connect(mapStateToProps, { recordDeleted, fetchAllRecordsStart })(RecordTable);