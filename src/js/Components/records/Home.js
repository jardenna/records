import React from 'react';
import { connect } from 'react-redux';

import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import endpoints from '@common/endpoints';

import defaultImg from '@images/default.png';
import DetailsLink from '@components/records/Shared/DetailsLink';
import Figure from '@commonReact/Figure';


import { fetchFirstSixStart } from '@redux/actions/homeActions';

function Home({ firstSix, fetchFirstSixStart, isLoading, error }) {
   React.useEffect(() => {
      fetchFirstSixStart();
   }, [fetchFirstSixStart]);
   if (isLoading) {
      return <Loader />;
   }
   if (error) {
      return <Error />;
   }
   return (

      <section className="block-container flex-wrapper">

         {firstSix && firstSix.map(six => {
            const photo = six.photo;
            const img = photo ? `${endpoints.uploads}${photo}` : defaultImg;

            return (<div className="block-item flex-item" key={six._id}>
               <h1>{six.artist}</h1>
               <h2> {six.title}</h2>

               <div className="block-img">
                  <Figure
                     src={img}
                     alt={six.artist}
                  />

               </div>
               <footer className='index-block-footer'>

                  <DetailsLink id={six._id} />

               </footer>
            </div>);
         }

         )}

      </section>
   );
}


const mapStateToProps = state => {

   return ({
      firstSix: state.firstSix.firstSix,
      isLoading: state.firstSix.isLoading,
      error: state.firstSix.error
   });
};

export default connect(mapStateToProps, { fetchFirstSixStart })(Home);
