import React from 'react';
import { Link } from 'react-router-dom';


const DeleteBtn = ({ onClick }) => {

    return (

        <Link to={'/'}>
            <button
                onClick={onClick}
                className="btn-danger">Delete
            </button>
        </Link >

    );
};

export default DeleteBtn;