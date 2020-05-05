import React from 'react';
import { Link } from 'react-router-dom';


const DeleteBtn = ({ onClick, linkTo }) => {

    return (

        <Link to={linkTo}>
            <button
                onClick={onClick}
                className="btn-danger">Delete
        </button>

        </Link >
    );
};

export default DeleteBtn;