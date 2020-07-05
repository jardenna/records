import React from 'react';

function ContainerCell({ as: As, text, ...props }) {
   const ref = React.useRef(null);
   React.useEffect(() => {
      if (props.focus) {
         ref.current.focus();
      }
   }, [props.focus]);
   return (
      <As tabIndex={props.focus ? 0 : -1} ref={ref}>
         {text && text}
      </As>
   );
}

export default ContainerCell;
