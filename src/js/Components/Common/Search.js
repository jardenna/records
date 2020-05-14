import React from 'react';



function Search({ onChange, value, placeholder, name, onClick }) {

   return (
      <form>
         <div className="input-wrapper">
            <input type="text"
               placeholder={placeholder}
               onChange={onChange}
               value={value}
               name={name}
            />
            <span onClick={() => onClick(name)}
               className="btn-close"

            />
         </div>
      </form>
   );
}

export default Search;
