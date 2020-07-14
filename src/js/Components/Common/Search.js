import React from 'react';

import SearchIcon from '../Common/svg/SearchIcon';
function Search({ onClick, onChange, value, placeholder, name }) {
   const [hiddenSearch, setHiddenSearch] = React.useState(true);

   const onToggleInput = () => {
      setHiddenSearch(!hiddenSearch);
   };

   return (
      <form className="search">
         <SearchIcon
            onClick={onToggleInput}
         />
         <div className="input-wrapper">



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
