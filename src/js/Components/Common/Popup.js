import React from 'react';
import DeleteBtn from '@components/records/Shared/DeleteBtn';

function Popup({ showFooter, componentName, submit, onClick, id, selected, text, buttonType, deleteLinkTo, triggerBtnText, triggerBtnClassName, role, ariaType }) {
   const ariaHidden = selected.includes(id) ? false : true;

   return (
      <div style={{ position: 'relative' }}>
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
                     {text}
                  </div>

                  {showFooter && <footer className="popup-footer">
                     {buttonType && <DeleteBtn onClick={submit} id={id} linkTo={deleteLinkTo} />}

                     <button className="btn-primary" onClick={onClick}>Fortryd</button>
                  </footer>}
               </div>
            </section>





         }


      </div>
   );

}

export default Popup;
