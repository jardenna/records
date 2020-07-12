import React from 'react';
import { connect } from 'react-redux';

import { labels, noInfo } from '@data/labels';
import { fetchAllRecordsStart } from '@redux/actions/recordsActions';
import { recordDeleted } from '@redux/actions/recordsActions';
import DetailsLink from '@components/records/Shared/DetailsLink';
//import Th from '@components/records/Th';
import Modal from '@commonReact/Modal';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import { useSorting } from '@hooks/useSorting';
import Button from '@commonReact/Button';
import Search from '@commonReact/Search';
import Select from '@formElements/SelectBox/Select';

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

   const [rowsCount, setRowsCount] = React.useState(10);
   const [active, setActive] = React.useState(10);
   const [hidden, setHidden] = React.useState(true);
   const [hiddenSearch, setHiddenSearch] = React.useState(true);

   const { sortedItems, sortFunc, sortClassName } = useSorting(allRecords);
   const { handleChange, values, handleEmptyInput, filteredText } = useFilter(searchObj, sortedItems);

   const { next, prev, jump, currentData, currentPage, maxPage, pages, nextPage, prevPage } = usePagination(filteredText, rowsCount, 2);

   const handleSearchInput = () => {
      setHiddenSearch(!hiddenSearch);
   };


   const handleSelect = (e, count) => {
      e.preventDefault();
      setRowsCount(count);
      setActive(count);
      setHidden(true);
   };


   const selectArr = [{ id: 10, value: 10 }, { id: 20, value: 20 }, { id: 50, value: 50 }, { id: filteredText.length, value: 'Show all' }];
   const rowLength = filteredText.length !== 0;

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
                        handleSearchInput={handleSearchInput}
                        hiddenSearch={hiddenSearch}
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
                        handleSearchInput={handleSearchInput}
                        hiddenSearch={hiddenSearch}

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
                        handleEmptyInput={handleEmptyInput}
                        handleSearchInput={handleSearchInput}
                        hiddenSearch={hiddenSearch}
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
                        handleSearchInput={handleSearchInput}
                        hiddenSearch={hiddenSearch}
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
               </tbody> : <tbody><tr><td colSpan="6">wwww</td></tr></tbody>}

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
                  {currentPage} af {filteredText.length} plader / {maxPage} sider
                  <div className="record-table-select">

                     <Select
                        placeholder={rowsCount}
                        options={selectArr}
                        zIndex={4}
                     />
                     <section className="selectbox" >
                        <span
                           onClick={() => setHidden(false)}
                           className="selectbox-option chevron-down"
                        >{rowsCount}</span>
                        <ul className={`${hidden ? 'hidden' : ''} selectbox-list`} >
                           {selectArr.map(opt =>
                              <li key={opt.id} >
                                 <a href="#"
                                    onClick={(e) => handleSelect(e, opt.id)}
                                    className={`selectbox-option ${active === opt.id && 'active'}`}
                                 >
                                    {opt.value}
                                 </a>
                              </li>
                           )}

                        </ul>
                     </section>
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