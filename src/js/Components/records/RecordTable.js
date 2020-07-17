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
import Selectbox from './Shared/Selectbox/Selectbox';

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
   const [active, setActive] = React.useState(10);

   const [isOpen, setIsOpen] = React.useState(false);
   const { sortedItems, sortFunc, sortClassName } = useSorting(allRecords);

   const [toggle, selected, onBlur] = useToggle([], onDelete);
   const { handleChange, values, handleEmptyInput, filteredText } = useFilter(searchObj, sortedItems);

   const { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage } = usePagination(filteredText, rowsCount, 2);



   const onSelect = (count) => {

      setIsOpen(false);
      setRowsCount(count);
      setActive(count);
   };

   const onClick = () => {
      setIsOpen(!isOpen);

   };

   const onToggleInput = (value) => {
      toggle(value);
      handleEmptyInput(value);
   };

   const onDelete = id => {
      recordDeleted(id);

   };

   const selectArr = [{ id: 10, value: 10 }, { id: 20, value: 20 }, { id: 50, value: 50 }, { id: filteredText.length, value: 'Show all' }];
   const rowLength = filteredText.length !== 0;
   if (isLoading) {
      return <Loader />;
   }

   const { noInfo, deleteText, noFoundRecord } = CONTENT;


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
                        onToggleInput={() => onToggleInput('artist')}
                        classNameHidden={!selected.includes('artist') ? 'hidden' : null}

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
                        onToggleInput={() => onToggleInput('title')}
                        classNameHidden={!selected.includes('title') ? 'hidden' : null}
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

                     <Search
                        onChange={handleChange}
                        name='test'
                        onClick={handleEmptyInput}
                        value={values.test}
                        onToggleInput={() => onToggleInput('test')}
                        classNameHidden={!selected.includes('test') ? 'hidden' : null}
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
                        onToggleInput={() => onToggleInput('label')}
                        classNameHidden={!selected.includes('label') ? 'hidden' : null}

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
                        onToggleInput={() => onToggleInput('origin')}
                        classNameHidden={!selected.includes('origin') ? 'hidden' : null}

                     />

                  </th>


                  <th>Antal plader <span>{allRecords && allRecords.length}</span></th>
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
                              onClick={() => toggle(record._id)}
                              submit={() => onDelete(record._id)}
                              content={record.title}
                              header={record.artist}
                              text={deleteText}
                              buttonType="delete"
                              id={record._id}
                              deleteLinkTo={'/all'}
                              triggerBtnClassName="danger"
                              triggerBtnText="Slet"
                              role="dialog"
                              ariaType="modal"
                              componentName="modal"
                              showFooter
                              selected={selected}

                           />
                        </td>
                     </tr>

                  )}
               </tbody> : <tbody><tr><td colSpan="6">{noFoundRecord}</td></tr></tbody>}

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
                  {currentPage} af {filteredText.length} plader / {maxPage} side(r)


                  <div className="record-table-select">
                     <Selectbox
                        selectArr={selectArr}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        onClick={onClick}
                        isOpen={isOpen}
                        text={rowsCount}
                        active={active}

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