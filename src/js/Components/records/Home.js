import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '@commonReact/Loader';
import Error from '@commonReact/Error';
import endpoints from '@common/endpoints';
import defaultImg from '@images/default.png';
import DetailsLink from '@components/records/Shared/DetailsLink';
import { fetchFirstSixStart } from '@redux/actions/homeActions';

export class Home extends Component {

   componentDidMount() {
      this.props.fetchFirstSixStart();
   }



   render() {
      const { firstSix } = this.props;
      const { isLoading, error } = this.props;
      if (isLoading) {
         return <Loader />;
      }



      return (

         <section className="index-block block-container flex-wrapper">
            {firstSix && firstSix.map(four => {
               const photo = four.photo;
               const img = photo ? `${endpoints.uploads}${photo}` : defaultImg;


               return (<div className="block-item flex-item" key={four._id}>
                  <h1>{four.artist}</h1>
                  <h2> {four.title}</h2>

                  <div className="block-img">
                     <img src={img} alt={four.artist} />
                  </div>
                  <footer>

                     <DetailsLink id={four._id} />

                  </footer>
               </div>);
            }

            )}

         </section>
      );
   }
}

const mapStateToProps = state => {

   return ({
      firstSix: state.firstSix.firstSix,
      isLoading: state.firstSix.isLoading,
      error: state.firstSix.error
   });
};

export default connect(mapStateToProps, { fetchFirstSixStart })(Home);
