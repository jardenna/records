import React from 'react';
import PropTypes from 'prop-types';

import DeleteBtn from '@components/records/Shared/DeleteBtn';

function Popup({ showFooter, componentName, submit, onClick, id, selected, text, content, buttonType, deleteLinkTo, triggerBtnText, triggerBtnClassName, role, ariaType }) {
   const ariaHidden = selected.includes(id) ? false : true;

   return (
      <React.Fragment >
         <button className={'btn-' + triggerBtnClassName} onClick={onClick} aria-describedby={id}>{triggerBtnText}</button>

         {selected.includes(id) &&

            <section className={` ${componentName} tooltip-right`} id={id}>
               <div
                  role={role}
                  aria-modal={ariaType === 'modal' ? true : null}
                  className='popup-inner popup-small'
                  aria-hidden={ariaHidden}
               >
                  <header className="popup-header">
                     <button className="icon-x" onClick={onClick} />
                  </header>
                  <div className="popup-content">
                     <p>{text}</p>
                     {content && <h2>{content}</h2>}

                  </div>

                  {showFooter && <footer className="popup-footer">
                     {buttonType && <DeleteBtn onClick={submit} id={id} linkTo={deleteLinkTo} />}

                     <button className="btn-primary" onClick={onClick}>Fortryd</button>
                  </footer>}
               </div>
            </section>
         }
      </React.Fragment>
   );

}

export default Popup;



Popup.propTypes = {

   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   triggerBtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   onClick: PropTypes.func.isRequired,
   buttonType: PropTypes.string.isRequired,
   selected: PropTypes.array.isRequired
};
Popup.defaultProps = {
   componentName: 'modal',
   triggerBtnClassName: 'btn-primary',
   ariaType: 'modal',
   role: 'modal',
   linkTo: '/',
   id: 1

};