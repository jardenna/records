import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '@formElements/Form';
import { createPost } from '@redux/actions/postsActions';

@connect(store => ({
   posts: store.posts
}))


export class PostForm extends Component {

   state = {
      titles: '',
      contents: ''
   }

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });

   }

   handleSubmit = (e) => {
      const { titles, contents } = this.state;

      e.preventDefault();
      //this.props.createPost({ titles, contents });

      this.props.dispatch(createPost({ titles, contents }));

   }

   render() {
      const { title, content } = this.state;

      const inputs = [
         {
            type: 'text',
            name: 'titles',
            inputIdentifier: 'title',
            label: 'Title',
            isRequired: true,
            value: title

         },
         {
            type: 'textarea',
            name: 'contents',
            inputIdentifier: 'content',
            label: 'Content',
            isRequired: true,
            value: content

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

// const mapStateToProps = (state) => ({
//    post: state.posts.post
// });

// const mapDispatchToProps = (dispatch) => ({
//    createPost: (newPost) => dispatch(createPost(newPost))
// });

// export default connect(mapStateToProps, { createPost })(PostForm);
export default PostForm;