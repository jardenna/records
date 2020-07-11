import React from 'react';
function useTimeout(callback, delay, value) {

   React.useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
         callback();

      }, delay);

      return () => clearTimeout(delayDebounceFn);
   }, [value]);


}

export default useTimeout;