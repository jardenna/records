import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchPosts } from '@redux/actions/postActions';

class Posts extends Component {

   componentDidMount() {
      this.props.fetchPosts();

   }
   render() {
      const postItems = this.props.posts.map(post => (
         <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
         </div>
      ));
      return (
         <div>
            <h1>Posts</h1>
            {postItems}
         </div>
      );
   }
}

const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
