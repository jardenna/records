import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '@commonReact/Loader';
import endpoints from '@common/endpoints';
import { labels, noInfo } from '@data/labels';
import defaultImg from '@images/default.png';
import DetailsContent from '@components/records/DetailsContent';
import Modal from '@commonReact/Modal';
import { recordDeleted } from '@redux/actions/recordsActions';
import { fetchDetailsStart } from '@redux/actions/detailActions';

export function Details({ fetchDetailsStart, isLoading, details, recordDeleted }) {

   const id = useParams().id;
   React.useEffect(() => {
      fetchDetailsStart(id);
   }, []);

   const { _id, artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info, photo } = details;

   if (isLoading) {
      return <Loader />;
   }

   const img = photo ? `${endpoints.uploads}${photo}` : defaultImg;
   return (
      <div className="details">
         <header className="details-header">
            <h2 className="details-artist">{artist}</h2>
            {' '}/{' '}
            <span className="details-title"> {title}</span>
         </header>

         <div className="block-container flex-wrapper">

            <div className="block-img flex-item">
               <img src={img} alt={artist} />
            </div>
            <section className="flex-2">


               <DetailsContent
                  text={origin === '' ? noInfo : origin}
                  label={labels.origin} />

               <DetailsContent
                  text={prodYear}
                  label={labels.prodYear} />

               <DetailsContent
                  text={released === ' ' ? prodYear : released}
                  label={labels.released} />

               <DetailsContent
                  text={label === '' ? noInfo : label}
                  label={labels.label} />

               <DetailsContent
                  text={recordNo === '' ? noInfo : recordNo}
                  label={labels.recordNo} />

               <DetailsContent
                  text={numOfRecords === null ? 1 : numOfRecords}
                  label={labels.numOfRecords} />


               <DetailsContent
                  text={price === 0 ? noInfo : price + ',00'}
                  label={labels.price} />


               {info &&
                  <div className="details-info">
                     <div className="text-bold"> {labels.info}</div>
                     <p>
                        {info}
                     </p>

                  </div>}

               <footer className="content-footer">
                  <Modal
                     onClick={() => recordDeleted(_id)}
                     title={title}
                     artist={artist}
                     id={_id}
                     linkTo={'/'}
                  />

                  <Link id={_id} className='btn-primary' to={`/update/${_id}`}>   Rediger </Link>


               </footer>
            </section>

         </div>

      </div>
   );
}


const mapStateToProps = (state) => ({
   details: state.recordDetails.record,
   error: state.recordDetails.error,
   isLoading: state.recordDetails.isLoading
});


export default connect(mapStateToProps, { fetchDetailsStart, recordDeleted })(Details);
