import React from 'react';

export const Filter = ({ onChange, value, onClick, placeholder, id }) => (
    <form>
        <div className="input-wrapper">
            <input type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                id={id}

            />
            <span onClick={onClick} className="icon-x" />
        </div>
    </form>

);




