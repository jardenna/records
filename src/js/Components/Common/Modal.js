import React, { Fragment } from 'react';

import DeleteBtn from '@components/records/Shared/DeleteBtn';


function Modal({ title, artist, onClick, id, linkTo }) {

   const [showPopup, setShowPopup] = React.useState(false);


   const togglePopup = () => {
      setShowPopup(!showPopup);
   };

   let text = 'Er du sikker på at du vil slette';
   let info = `${title} med ${artist}?`;

   return (
      <Fragment>
         <button className='btn-danger' onClick={togglePopup}>Slet</button>
         {showPopup ?
            <div className='popup'>
               <div className='popup_inner'>
                  <p>{text}</p>
                  <h1>{info}</h1>
                  <div className="modal-footer">
                     <button className="btn-primary" onClick={togglePopup}>Fortryd</button>
                     <DeleteBtn onClick={onClick} id={id} linkTo={linkTo} />

                  </div>
               </div>
            </div>
            : null
         }
      </Fragment>
   );
}


export default Modal;
