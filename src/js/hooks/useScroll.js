import React from 'react';
import useGlobalEventListner from '@hooks/useGlobalEventListner';


function useScroll(ref) {
   const [isSticky, setSticky] = React.useState(false);

   const handleScroll = React.useCallback(() => {

      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 0);
      }

   });

   useGlobalEventListner('scroll', handleScroll);
   return [isSticky];
}

export default useScroll;
