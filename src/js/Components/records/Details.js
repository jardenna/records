import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import endpoints from '@common/endpoints';
import { labels, noInfo } from '@data/labels';
import defaultImg from '@images/default.png';
import DetailsContent from '@components/records/DetailsContent';
import Modal from '@commonReact/Modal';
import { recordDeleted } from '@redux/actions/recordsActions';
import { fetchDetailsStart } from '@redux/actions/detailActions';

export class Details extends Component {

   componentDidMount() {

      this.props.fetchDetailsStart(this.props.match.params.id);

   }

   render() {
      const { _id, artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info, photo } = this.props.details;
      const { isLoading, error } = this.props;
      if (isLoading) {
         return <Loader />;
      }

      // if (error) {
      //    return <Error />;
      // }

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
                     <Modal
                        onClick={() => this.props.recordDeleted(_id)}
                        title={title}
                        artist={artist}
                        id={_id}
                        linkTo={'/'}
                     />

                     <Link to={`/update/${_id}`}>   <button id={_id}>Rediger</button> </Link>


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

const mapStateToProps = (state) => ({
   details: state.recordDetails.record,
   error: state.recordDetails.error,
   isLoading: state.recordDetails.isLoading
});


export default connect(mapStateToProps, { fetchDetailsStart, recordDeleted })(Details);
