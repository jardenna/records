import React, { Component } from 'react';

import Form from '@formElements/Form';
import api from '@common/api';
import axios from 'axios';



class Records extends Component {

   state = {
      title: '',
      description: ''
   }

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });

   }

   handleSubmit = (e) => {
      const { title, description } = this.state;
      e.preventDefault();
      const url = 'http://localhost:5000/posts/';
      const data = { title, description };
      // axios({
      //    url: 'http://localhost:5000/posts/',
      //    method: 'POST',
      //    data
      // })
      //    .then(() => console.log('data has been sent'))
      //    .catch((err) => console.log('error', err));

      api('post', url, data)
         .then(() => console.log('data has been sent'))
         .catch((err) => console.log('error', err));

      this.setState({
         title: '',
         description: ''
      });
   }

   render() {
      const { title, description } = this.state;

      const inputs = [
         {
            type: 'text',
            name: 'title',
            inputIdentifier: 'title',
            label: 'Title',
            isRequired: true,
            value: title

         },
         {
            type: 'textarea',
            name: 'description',
            inputIdentifier: 'content',
            label: 'Content',
            isRequired: true,
            value: description

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

export default Records;