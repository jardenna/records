import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '@common/api';
import endpoints from '@common/endpoints';
import defaultImg from '@images/default.png';

export class Home extends Component {
   state = {
      isLoading: true,
      firstFour: []
   }
   componentDidMount() {
      api('get', endpoints.main)
         .then(firstFour => this.setState({
            isLoading: false,
            firstFour
         }))
         .catch(error => console.log(error));

   }



   render() {
      const { firstFour } = this.state;


      return (

         <section className="index-block block-container flex-wrapper">
            {firstFour.map(four => {
               const photo = four.photo;
               const img = photo ? `${endpoints.uploads}${photo}` : defaultImg;


               return (<div className="block-item flex-item" key={four._id}>
                  <h1>{four.artist}</h1>
                  <h2> {four.title}</h2>

                  <div className="block-img">
                     <img src={img} alt={four.artist} />
                  </div>
                  <footer>
                     <Link to={`/details/${four._id}`}>Details</Link>

                  </footer>
               </div>);
            }

            )}

         </section>
      );
   }
}

export default Home;
