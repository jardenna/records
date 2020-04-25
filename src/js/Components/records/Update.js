import React, { Component } from 'react';
import axios from 'axios';

import endpoints from '@common/endpoints';
import api from '@common/api';
import Form from '@formElements/Form';

export class Update extends Component {
   state = {
      file: '',
      fileName: '',
      filePath: '',
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

      const id = this.props.match.params.id;
      const url = `${endpoints.records}${id}`;

      api('get', url)
         .then(record => this.setState({
            isLoading: false,
            record
         }))
         .catch(error => console.log(error));

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
      const { record, file, fileName } = this.state;
      e.preventDefault();
      const url = 'http://localhost:5000/records/';
      const id = this.props.match.params.id;
      const path = url + id;

      const fd = new FormData();

      for (let key in record) {
         fd.append(key, record[key]);
      }
      fd.append(fileName, file);



      axios.patch(path, record)
         .then(data => {

            this.setState({
               filePath: data.photo
            });
         })
         .catch(error => {
            console.error(error);
         });
      // fetch(path, {
      //    method: 'patch',
      //    body: fd
      // })
      //    .then(res => res.ok ? res.json() : Promise.reject(res))
      //    .then(data => {

      //       this.setState({
      //          filePath: data.photo
      //       });
      //    })
      //    .catch(error => {
      //       console.error(error);
      //    });



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
         <Form
            inputs={inputs}
            btnText='Submit'
            btnClass='primary'
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
         />
      );
   }
}

export default Update;
