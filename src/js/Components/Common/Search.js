import React from 'react';

import SearchIcon from '../Common/svg/SearchIcon';
function Search({ onClick, onChange, value, placeholder, name, handleSearchInput, hiddenSearch }) {

   return (
      <form className="search">
         <div className="input-wrapper">
            <SearchIcon
               onClick={handleSearchInput}
            />


            <div className={hiddenSearch ? 'hidden' : null}>
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
