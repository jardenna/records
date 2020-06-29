import React, { useRef, useEffect } from 'react';

import useCustomContext from '@hooks/useCustomContext';

const SelectOptions = (props) => {
   const ref = useRef(null);
   //console.log(useCustomContext());
   useEffect(() => {
      if (props.focus) {
         ref.current.focus();
      }
   }, [props.focus]);



   return (
      <section id={props.id} className="select-options"
         onClick={props.onClick}
         tabIndex={props.focus ? 0 : -1}
         onKeyUp={props.onKeyUp}
         ref={ref}
      >

         <div className="select-info" data-selector="selectInfo">
            <p> {props.name} </p>
         </div>

      </section>
   );


};

export default SelectOptions;

