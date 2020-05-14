import React from 'react';
import { connect } from 'react-redux';

import { labels, noInfo } from '@data/labels';
import { fetchAllRecordsStart } from '@redux/actions/recordsActions';
import { recordDeleted } from '@redux/actions/recordsActions';
import DetailsLink from '@components/records/Shared/DetailsLink';
import Modal from '@commonReact/Modal';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import { useSortableData } from '@hooks/useSorting';
import Button from '@commonReact/Button';
import Search from '@commonReact/Search';

function RecordTable({ fetchAllRecordsStart, allRecords, error, isLoading, recordDeleted }) {

   React.useEffect(() => {
      fetchAllRecordsStart();
   }, []);

   const searchObj = {
      searchArtist: '',
      searchTitle: '',
      searchLabel: '',
      searchOrigin: '',
      searchProdYear: ''
   };
   const [values, setValues] = React.useState(searchObj);
   const [searchInput, setSearchInput] = React.useState('');

   const { items, requestSort, getClassNamesFor } = useSortableData(allRecords);


   if (isLoading) {
      return <Loader />;
   }

   if (error) {
      return <Error />;
   }


   const handleSearch = (e) => {
      const { name, value } = e.target;

      setSearchInput(name);
      setValues({
         ...values,
         [name]: value
      });

   };
   const filteredText = items.filter(item => {
      const artist = values.searchArtist.toLowerCase();
      const title = values.searchTitle.toLowerCase();
      const label = values.searchLabel.toLowerCase();
      const origin = values.searchOrigin.toLowerCase();

      if (searchInput === 'searchTitle') {
         return item.title.toLowerCase().includes(title);
      }

      if (searchInput === 'searchArtist') {
         return item.artist.toLowerCase().includes(artist);
      }
      if (searchInput === 'searchLabel') {
         return item.label.toLowerCase().includes(label);
      }
      if (searchInput === 'searchOrigin') {
         return item.origin.toLowerCase().includes(origin);
      }

      return item;
   });


   return (
      <table className="record-table">
         <thead>
            <tr>

               <th>
                  <Button
                     type='button'
                     id={labels.artist}
                     text={labels.artist}
                     className={getClassNamesFor('artist')}
                     onClick={() => requestSort('artist')}
                  />
                  <Search
                     onChange={handleSearch}
                     value={values.searchArtist}
                     name='searchArtist'
                  />
               </th>
               <th>
                  <Button
                     type='button'
                     id={labels.title}
                     text={labels.title}
                     className={getClassNamesFor('title')}
                     onClick={() => requestSort('title')}
                  />
                  <Search
                     onChange={handleSearch}
                     value={values.searchTitle}
                     name='searchTitle'
                  />
               </th>
               <th>
                  <Button
                     type='button'
                     id={labels.prodYear}
                     text={labels.prodYear}
                     className={getClassNamesFor('prodYear')}
                     onClick={() => requestSort('prodYear')}
                  />

               </th>
               <th>
                  <Button
                     type='button'
                     id={labels.label}
                     text={labels.label}
                     className={getClassNamesFor('label')}
                     onClick={() => requestSort('label')}
                  />
                  <Search
                     onChange={handleSearch}
                     value={values.label}
                     name='searchLabel'
                  />
               </th>

               <th>
                  <Button
                     type='button'
                     id={labels.origin}
                     text={labels.origin}
                     className={getClassNamesFor('origin')}
                     onClick={() => requestSort('origin')}
                  />
                  <Search
                     onChange={handleSearch}
                     value={values.origin}
                     name='searchOrigin'
                  />

               </th>


               <th>Antal plader <span>{allRecords && allRecords.length}</span></th>
            </tr>
         </thead>
         <tbody>

            {filteredText.map(record =>

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

   );
}


const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords,
   error: state.records.error,
   isLoading: state.records.isLoading
});



export default connect(mapStateToProps, { recordDeleted, fetchAllRecordsStart })(RecordTable);