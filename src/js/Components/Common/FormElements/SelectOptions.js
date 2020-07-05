import React from 'react';


const SelectOptions = (props) => {
   const ref = React.useRef(null);
   React.useEffect(() => {
      if (props.focus) {
         ref.current.focus();
      }
   }, [props.focus]);

   return (
      <section className="select-options"
         onClick={props.onClick}
         tabIndex={props.focus ? 0 : -1}
         onKeyUp={props.onKeyUp}
         ref={ref}
      >

         <div className="select-info" data-selector="selectInfo">
            {<div> {props.data.map((b, i) => <p key={i}>{b}</p>)} </div>}

         </div>

      </section>
   );

};

export default SelectOptions;

