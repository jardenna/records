import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameList from '@components/Games/GameList';
import { fetchGames, deleteRecord } from '@redux/actions/gameActions';

export class GamesPage extends Component {
   componentDidMount() {

      this.props.fetchGames();

   }

   handleDelete = (id) => {
      this.props.deleteRecord(id);
   }

   render() {
      return (
         <div>
            <h1>Games List</h1>
            <GameList
               games={this.props.games}
               onClick={this.handleDelete}
            />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      games: state.games.games
   };
}

export default connect(mapStateToProps, { fetchGames, deleteRecord })(GamesPage);


