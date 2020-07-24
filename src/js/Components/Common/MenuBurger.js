import React from 'react';

function MenuBurger({ onClick }) {
   return (
      <span
         className="mobile-button"
         onClick={onClick}
      />
   );
}

export default MenuBurger;
