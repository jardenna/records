import React, { Component } from 'react';
import { connect } from 'react-redux';

import endpoints from '@common/endpoints';
import Form from '@formElements/Form';
import { fetchDetails } from '@redux/actions/detailActions';
import { updateRecordSuccess } from '@redux/actions/updateActions';
import { updateImage } from '@redux/actions/updateActions';


export class Update extends Component {
   state = {
      file: '',
      fileName: '',
      filePath: '',
      imgUpdated: false,
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


      this.props.fetchDetails(this.props.details._id);

      this.setState({
         record: this.props.details
      });

   }

   handleChange = (e) => {
      const { name, value } = e.target;


      if (name === 'photo') {
         this.setState({
            file: e.target.files[0],
            fileName: name,
            imgUpdated: true

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
      const { record, imgUpdated, fileName, file } = this.state;


      const id = this.props.details._id;
      this.props.updateRecordSuccess(id, record, imgUpdated, fileName, file);
   }

   render() {

      const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info } = this.state.record;

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
            type: 'textarea',
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


const mapStateToProps = (state) => ({
   details: state.recordDetails.record
});



export default connect(mapStateToProps, { fetchDetails, updateRecordSuccess })(Update);
