import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '@common/api';
import endpoints from '@common/endpoints';
import { labels, noInfo } from '@data/labels';
import defaultImg from '@images/default.png';
import DetailsContent from '@components/records/DetailsContent';

export class Details extends Component {

   state = {
      isLoading: true,
      record: {}
   }

   componentDidMount() {

      const url = 'http://localhost:5000/records/';
      const id = this.props.match.params.id;
      const test = `${url}${id}`;
      api('get', test)
         .then(record => this.setState({
            isLoading: false,
            record
         }))
         .catch(error => console.log(error));

   }
   render() {
      const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info, photo } = this.state.record;


      const img = photo ? `${endpoints.uploads}${photo}` : defaultImg;
      return (
         <div className="details-container">
            <div className="block-container flex-wrapper">

               <section className="flex-2 details-content">


                  <DetailsContent
                     text={origin === null ? noInfo : origin}
                     label={labels.origin} />

                  <DetailsContent
                     text={prodYear}
                     label={labels.prodYear} />

                  <DetailsContent
                     text={released === null ? prodYear : released}
                     label={labels.released} />

                  <DetailsContent
                     text={label}
                     label={labels.label} />

                  <DetailsContent
                     text={recordNo}
                     label={labels.recordNo} />

                  <DetailsContent
                     text={numOfRecords === 0 ? 1 : numOfRecords}
                     label={labels.numOfRecords} />


                  <DetailsContent
                     text={price === null ? noInfo : price + ',00'}
                     label={labels.price} />


                  {info === '' ? null :
                     <div className="details-info">
                        <div className="text-bold"> {labels.info}</div>
                        <p>
                           {info}
                        </p>

                     </div>}

                  <footer className="content-footer">

                     Slet

                     <Link to='/'>Rediger</Link>


                  </footer>
               </section>
               <section className="block-item flex-item">
                  <h1>{artist}</h1>
                  <h2> {title}</h2>
                  <div className="block-img">
                     <img src={img} alt={artist} />
                  </div>

               </section>
            </div>

         </div>
      );
   }
}

export default Details;
