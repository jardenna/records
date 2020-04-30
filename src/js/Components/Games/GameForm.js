import React, { Component } from 'react';

import { saveGame, fetchGame, updateGame } from '@redux/actions/gameActions';
import { connect } from 'react-redux';

export class GameForm extends Component {

   state = {
      id: this.props.game ? this.props.game._id : null,
      title: this.props.game ? this.props.game.title : '',
      cover: this.props.game ? this.props.game.cover : '',
      errors: {}
   }

   componentDidMount() {

      if (this.props.match.params.id) {
         this.props.fetchGame(this.props.match.params.id);
      }

   }


   componentDidUpdate(props) {

      if (this.props.game !== props.game) {
         this.setState(this.props.game);
      }
   }


   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value
      });
   }
   handleSubmit = (e) => {
      const { id, title, cover } = this.state;

      e.preventDefault();

      if (id) {
         this.props.updateGame({ title, cover }, id);
      } else {
         this.props.saveGame({ title, cover });
      }

   }



   render() {

      return (
         <form className='ordinary' onSubmit={this.handleSubmit}>
            <h1>Add new game</h1>

            <div>
               <label htmlFor="title">Title</label>
               <input
                  name="title"
                  value={this.state.title !== null ? this.state.title : ''}
                  onChange={this.handleChange}
                  id="title"
               />
               <div >
                  <label htmlFor="cover">Cover URL</label>
                  <input
                     name="cover"
                     value={this.state.cover !== null ? this.state.cover : ''}
                     onChange={this.handleChange}
                     id="cover"
                  />
                  <span>{this.state.errors.cover}</span>
               </div>
               <span>{this.state.errors.title}</span>
            </div>
            <div className="field">
               {this.state.cover !== '' && <img src={this.state.cover} alt="cover" />}
            </div>

            <div className="field">
               <button className="btn-primary">Save</button>
            </div>
         </form>
      );
   }
}

function mapStateToProps(state, ownProps) {

   if (ownProps.match.params.id) {

      return {
         game: state.games.game && state.games.game.find(game => game._id === ownProps.match.params.id),
         fetchGame: state.games.game
      };
   }

   return {
      game: null
   };
}
// const mapDispatchToProps = (dispatch) => ({
//    saveGame: (item) => (dispatch(saveGame(item)))
// });

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameForm);
