import React, { Component } from 'react';
import { connect } from 'react-redux';

import { labels, noInfo } from '@data/labels';
import { fetchAllRecords } from '@redux/actions/recordsActions';
import { deleteRecord } from '@redux/actions/deleteActions';
import DetailsLink from '@components/records/Shared/DetailsLink';
import Modal from '@commonReact/Modal';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';


class RecordTable extends Component {



   componentDidMount() {
      this.props.fetchAllRecords();

   }


   render() {

      const { allRecords, error, isLoading } = this.props;

      if (isLoading) {
         return <Loader />;
      }

      if (error) {
         return <Error />;
      }


      return (
         <table className="record-table">
            <thead>
               <tr>
                  <th>{labels.artist} </th>
                  <th>{labels.title} </th>
                  <th>{labels.prodYear} </th>
                  <th>{labels.label} </th>
                  <th>{labels.origin} </th>

                  <th>Antal plader <span>{allRecords && allRecords.length}</span></th>
               </tr>
            </thead>
            <tbody>

               {allRecords && allRecords.map(record =>

                  <tr id={record._id} key={record._id}>
                     <td className="first-td" data-label={labels.artist}>{record.artist}</td>
                     <td data-label={labels.title}>{record.title}</td>
                     <td data-label={labels.prodYear}>{record.prodYear}</td>
                     <td data-label={labels.label}>{record.label === null || record.label === '' ? noInfo : record.label}</td>
                     <td data-label={labels.origin}>{record.origin === null || record.origin === '' ? noInfo : record.origin}</td>

                     <td>
                        <DetailsLink id={record._id} />

                        <Modal
                           onClick={() => this.props.deleteRecord(record._id)}
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
}

const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords,
   error: state.records.error,
   isLoading: state.records.isLoading
});



export default connect(mapStateToProps, { fetchAllRecords, deleteRecord })(RecordTable);