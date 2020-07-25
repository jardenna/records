import React from 'react';
import PropTypes from 'prop-types';

import useToggle from '@hooks/useToggle';

import DeleteBtn from '@components/records/Shared/DeleteBtn';

function Popup({ showFooter, componentName, tooltipDirection, id, text, content, buttonType, deleteLinkTo, triggerBtnText, triggerBtnClassName, role, ariaType, callback }) {
   const [toggle, selected, close, isOpen] = useToggle([], callback);

   const hidden = selected.includes(id);

   const overlayBackground = componentName === 'modal' ? 'overlay-background' : '';

   return (
      <div className={`${overlayBackground} popup-wrapper`} >
         <button className={'btn-' + triggerBtnClassName} onClick={() => close(id)} aria-describedby={id}>{triggerBtnText}</button>

         {hidden || isOpen &&
            <section className={`${componentName} ${tooltipDirection ? 'tooltip-' + tooltipDirection : ''}`} id={id} >
               <div
                  role={role}
                  aria-modal={ariaType === 'modal' ? true : null}
                  className='popup-small'
                  aria-hidden={hidden}
               >
                  <header className="popup-header">
                     <button className="icon-x" onClick={() => close(id)} />
                  </header>
                  <div className="popup-content">
                     <p>{text}</p>
                     {content && <h2>{content}</h2>}

                  </div>

                  {showFooter && <footer className="popup-footer">
                     {buttonType && <DeleteBtn onClick={() => toggle(id)} id={id} linkTo={deleteLinkTo} />}

                     <button className="btn-primary" onClick={() => close(id)}>Fortryd</button>
                  </footer>}
               </div>
            </section>
         }
         {hidden || isOpen && <div className="popup-overlay" onClick={() => close()} />}

      </div>
   );

}

export default Popup;

Popup.propTypes = {

   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   triggerBtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   buttonType: PropTypes.string.isRequired,
   tooltipDirection: PropTypes.string
};
Popup.defaultProps = {
   componentName: 'modal',
   triggerBtnClassName: 'btn-primary',
   ariaType: 'modal',
   role: 'modal',
   linkTo: '/',
   id: 1


};