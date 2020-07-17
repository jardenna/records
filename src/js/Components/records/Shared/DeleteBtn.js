import React from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from '@common/constants/content';



const DeleteBtn = ({ onClick, linkTo }) => {
    const { deleteRecord } = CONTENT;
    return (

        <Link to={linkTo}>
            <button
                onClick={onClick}
                className="btn-danger">
                {deleteRecord}
            </button>

        </Link >
    );
};

export default DeleteBtn;