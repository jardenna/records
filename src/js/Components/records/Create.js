import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '@formElements/Form';
import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';

import { createRecord } from '@redux/actions/createActions';
import { fetchDetails } from '@redux/actions/detailActions';


class Create extends Component {

   state = {
      file: '',
      fileName: '',

      record: {
         artist: '',
         title: '',
         prodYear: '',
         label: '',
         origin: '',
         price: ' ',
         recordNo: '',
         numOfRecords: ' ',
         released: ' ',
         info: ''
      }
   }

   componentDidMount() {
      const { fetchDetails, details } = this.props;
      const id = details._id;


      if (id) {
         fetchDetails(id);
         this.setState({
            record: {
               artist: details.artist,
               title: details.title,
               prodYear: details.prodYear,
               label: details.label,
               origin: details.origin,
               price: details.price,
               recordNo: details.recordNo,
               numOfRecords: details.numOfRecords,
               released: details.released,
               info: details.info
            }
         });
      }


   }

   handleChange = (e) => {
      const { name, value } = e.target;


      if (name === 'photo') {
         this.setState({
            file: e.target.files[0],
            fileName: name
         });
      }
      this.setState(prevState => ({
         record:
         {
            ...prevState.record, [name]: value
         }
      }));

   }

   handleSubmit = (e) => {
      e.preventDefault();
      const { file, fileName, record } = this.state;
      const { createRecord } = this.props;
      createRecord(record, fileName, file);

      this.setState({
         file: '',
         fileName: '',
         record: {
            artist: '',
            title: '',
            prodYear: '',
            label: '',
            origin: '',
            price: ' ',
            recordNo: '',
            numOfRecords: ' ',
            released: ' ',
            info: ''
         }
      });

   }

   render() {
      const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info } = this.state.record;
      const { isLoading, error } = this.props;

      if (isLoading) {
         return <Loader />;
      }

      if (error) {
         return <Error />;
      }

      const inputs = [
         {
            type: 'text',
            name: 'artist',
            inputIdentifier: 'artist',
            label: 'Gruppe / Kunstner',
            isRequired: true,
            value: artist

         },
         {
            type: 'text',
            name: 'title',
            inputIdentifier: 'title',
            label: 'Titel',
            isRequired: true,
            value: title

         },
         {
            type: 'text',
            name: 'prodYear',
            inputIdentifier: 'prodYear',
            label: 'Produktions år',
            isRequired: true,
            value: prodYear
         },
         {
            type: 'text',
            name: 'label',
            inputIdentifier: 'label',
            label: 'Plademærke',
            isRequired: false,
            value: label
         },
         {
            type: 'textarea',
            name: 'origin',
            inputIdentifier: 'origin',
            label: 'Oprindelse',
            isRequired: false,
            value: origin
         },
         {
            type: 'text',
            name: 'price',
            inputIdentifier: 'price',
            label: 'Pris',
            isRequired: false,
            value: price
         },
         {
            type: 'text',
            name: 'recordNo',
            inputIdentifier: 'recordNo',
            label: 'Pladenummer',
            isRequired: false,
            value: recordNo
         },
         {
            type: 'text',
            name: 'numOfRecords',
            inputIdentifier: 'numOfRecords',
            label: 'Antal LP(er)',
            isRequired: false,
            value: numOfRecords
         },
         {
            type: 'text',
            name: 'released',
            inputIdentifier: 'released',
            label: 'Senest udgivet',
            isRequired: false,
            value: released

         },
         {
            type: 'text',
            name: 'info',
            inputIdentifier: 'info',
            label: 'Værd at vide',
            isRequired: false,
            value: info
         },
         {
            type: 'file',
            name: 'photo',
            inputIdentifier: 'cover',
            label: 'Indsæt billede',
            isRequired: false
         }

      ];

      return (
         <div>
            <Form
               inputs={inputs}
               btnText='Submit'
               btnClass='primary'
               onSubmit={this.handleSubmit}
               onChange={this.handleChange}
            />


         </div>
      );
   }
}

const mapStateToProps = state => ({
   record: state.create.record,
   details: state.recordDetails.record,
   error: state.create.error,
   isLoading: state.create.isLoading

});

export default connect(mapStateToProps, { createRecord, fetchDetails })(Create);