import React, { Component, Fragment } from 'react';


import DeleteBtn from '@components/records/Shared/DeleteBtn';

class Modal extends Component {
   state = {
      showPopup: false
   }

   togglePopup = () => {
      this.setState({
         showPopup: !this.state.showPopup
      });
   }



   render() {
      const { showPopup } = this.state;
      const { title, artist, className, onClick, id, linkTo } = this.props;

      let text = 'Er du sikker på at du vil slette';
      let info = `${title} med ${artist}?`;

      return (
         <Fragment>
            <button className='btn-primary' onClick={this.togglePopup}>Slet</button>
            {showPopup ?
               <div className='popup'>
                  <div className='popup_inner'>
                     <p>{text}</p>
                     <h1>{info}</h1>
                     <div className="modal-footer">
                        <button className="btn-primary" onClick={this.togglePopup}>Fortryd</button>
                        <DeleteBtn onClick={onClick} id={id} linkTo={linkTo} />

                     </div>
                  </div>
               </div>
               : null
            }
         </Fragment>
      );
   }
}

export default Modal;
