import React, { Component } from 'react';

import api from '@common/api';
class PostForm extends Component {
   state = {
      title: '',
      body: ''
   };

   onChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value
      });
   }

   onSubmit = (e) => {
      e.preventDefault();
      const { title, body } = this.state;
      api('post', 'https://jsonplaceholder.typicode.com/posts', { title, body });

   }
   render() {
      const { title, body } = this.state;
      return (
         <div>
            <h2>Post form</h2>
            <form onSubmit={this.onSubmit}>

               <input type="text" name='title' placeholder='Title' value={title} onChange={this.onChange} />

               < input type="text" name='body' placeholder='Body' value={body} onChange={this.onChange} />
               <button type='submit'>sum</button>
            </form>
         </div>
      );
   }
}

export default PostForm;
