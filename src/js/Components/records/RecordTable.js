import React, { Component } from 'react';
import { connect } from 'react-redux';


import { labels, noInfo } from '@data/labels';
import { fetchAllRecords } from '@redux/actions/recordsActions';
import DetailsLink from '@components/records/Shared/DetailsLink';




class RecordTable extends Component {



   componentDidMount() {
      this.props.fetchAllRecords();

   }


   render() {

      return (
         <table className="record-table">
            <thead>
               <tr>
                  <th>{labels.artist} </th>
                  <th>{labels.title} </th>
                  <th>{labels.prodYear} </th>
                  <th>{labels.label} </th>
                  <th>{labels.origin} </th>

                  <th>Antal plader <span>{this.props.allRecords.length}</span></th>
               </tr>
            </thead>
            <tbody>

               {this.props.allRecords.map(record =>

                  <tr id={record._id} key={record._id}>
                     <td className="first-td" data-label={labels.artist}>{record.artist}</td>
                     <td data-label={labels.title}>{record.title}</td>
                     <td data-label={labels.prodYear}>{record.prodYear}</td>
                     <td data-label={labels.label}>{record.label === null || record.label === '' ? noInfo : record.label}</td>
                     <td data-label={labels.origin}>{record.origin === null || record.origin === '' ? noInfo : record.origin}</td>

                     <td>
                        <DetailsLink id={record._id} />

                        delete
                        </td>
                  </tr>

               )}
            </tbody>

         </table>

      );
   }
}

const mapStateToProps = (state) => ({
   allRecords: state.records.allRecords
});

export default connect(mapStateToProps, { fetchAllRecords })(RecordTable);