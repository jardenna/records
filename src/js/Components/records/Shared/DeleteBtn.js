import React from 'react';
import { Link } from 'react-router-dom';


const DeleteBtn = ({ onClick, linkTo }) => {

    return (


        <button
            onClick={onClick}
            className="btn-danger">Delete
        </button>


    );
};

export default DeleteBtn;