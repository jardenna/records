import React from 'react';

import SearchIcon from '../Common/svg/SearchIcon';
function Search({ onClick, onChange, value, placeholder, name, onToggleInput, classNameHidden }) {

   return (
      <form className="search">
         <SearchIcon
            onClick={onToggleInput}
         />
         <div className="input-wrapper">



            <div className={classNameHidden}>
               <input type="text"
                  placeholder={placeholder}
                  onChange={onChange}
                  value={value}
                  name={name}

               />

               <span onClick={() => onClick(name)}
                  className="btn-delete"
               />
            </div>

         </div>
      </form>
   );
}

export default Search;
