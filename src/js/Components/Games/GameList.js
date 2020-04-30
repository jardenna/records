import React from 'react';
import { Link } from 'react-router-dom';

function GameList({ games, onClick }) {

   const emptyMessage = 'You have no games yet';

   return (
      <div>

         {games ? games.map(
            game => {

               return (<div key={game._id}>
                  <h1>{game.title}</h1>
                  <img src={game.cover} alt={game.cover} />

                  <Link to={`/game/${game._id}`}>Edit</Link>
                  <button onClick={() => onClick(game._id)}>Delete</button>
               </div>);
            }
         ) : emptyMessage
         }
      </div >
   );
}

export default GameList;
