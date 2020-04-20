import React, { Component } from 'react';

import Form from '@formElements/Form';


class Records extends Component {

   state = {
      file: '',
      fileName: '',
      filePath: '',
      createRecords: {
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

   handleChange = (e) => {
      const { name, value } = e.target;


      if (name === 'photo') {
         this.setState({
            file: e.target.files[0],
            fileName: name
         });
      }
      this.setState(prevState => ({
         createRecords:
         {
            ...prevState.createRecords, [name]: value
         }
      }));

   }

   handleSubmit = (e) => {
      const { createRecords, file, fileName } = this.state;
      e.preventDefault();
      const url = 'http://localhost:5000/records/';

      const fd = new FormData();

      for (let key in createRecords) {
         fd.append(key, createRecords[key]);
      }



      // fd.append('artist', createRecords.artist);
      // fd.append('title', createRecords.title);
      // fd.append('prodYear', createRecords.prodYear);
      // fd.append('label', createRecords.label);
      // fd.append('origin', createRecords.origin);
      // fd.append('recordNo', createRecords.recordNo);
      // fd.append('numOfRecords', createRecords.numOfRecords);
      // fd.append('released', createRecords.released);
      // fd.append('info', createRecords.info);
      fd.append(fileName, file);




      fetch(url, {
         method: 'POST',
         body: fd
      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
         .then(data => {
            console.log(data);
            this.setState({
               filePath: data.photo
            });
         })
         .catch(error => {
            console.error(error);
         });


      this.setState({
         artist: '',
         title: '',
         prodYear: '',
         label: '',
         origin: '',
         price: ' ',
         recordNo: '',
         numOfRecords: ' ',
         released: ' ',
         info: '',
         photo: ''
      });
   }

   render() {
      const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info } = this.state.createRecords;


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
      const img = `http://localhost:5000/uploads/${this.state.filePath}`;
      return (
         <div>
            <Form
               inputs={inputs}
               btnText='Submit'
               btnClass='primary'
               onSubmit={this.handleSubmit}
               onChange={this.handleChange}
            />

            <img src={img} alt="" />
         </div>
      );
   }
}

export default Records;