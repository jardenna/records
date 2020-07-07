import React from 'react';

const selectArr = [{ id: 10, text: 10 }, { id: 20, text: 20 }, { id: 50, text: 50 }];
function Selectbox() {


   const [active, setActive] = React.useState(10);
   const [hidden, setHidden] = React.useState(true);

   const handleSelect = (e, count) => {

      e.preventDefault();

      setActive(count);
      //setHidden(true);
   };

   const handleBlur = () => {

      setHidden(true);
   };


   return (

      <section className="selectbox" onBlur={handleBlur}>
         <span
            onClick={() => setHidden(false)}
            className="selectbox-option chevron-down"
         >
            12
         </span>
         <ul className={`${hidden ? 'hidden' : ''} selectbox-list`} >
            {selectArr.map(opt =>
               <li key={opt.id} >
                  <a href="#"
                     onClick={(e) => handleSelect(e, opt.id)}
                     className={`selectbox-option ${active === opt.id && 'active'}`}
                  >
                     {opt.text}
                  </a>
               </li>
            )}

         </ul>
      </section>


   );
}

export default Selectbox;
