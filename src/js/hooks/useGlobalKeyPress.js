import React from 'react';

//  const moveDown = useGlobalKeyPress(ARROW_DOWN);
function useGlobalKeyPress(targetKey) {
   const [isKeyPressed, setKeyPressed] = React.useState(false);
   // Only allow fetching each keypress event once to prevent infinite loops
   if (isKeyPressed) {
      setKeyPressed(false);
   }
   function downHandler(e) {

      if (e.key === targetKey) {
         setKeyPressed(true);
      }

   }

   React.useEffect(
      () => {

         window.addEventListener('keydown', downHandler);

         return () => {
            window.removeEventListener('keydown', downHandler);

         };
      },
      [targetKey]
   );

   return isKeyPressed;
}
export default useGlobalKeyPress;