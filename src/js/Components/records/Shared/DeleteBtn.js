import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { CONTENT } from '@common/constants/content';



const DeleteBtn = ({ onClick, linkTo }) => {
    const { deleteRecord } = CONTENT;
    return (

        <Link to={linkTo} role="button" className="btn-danger">
            <div
                onClick={onClick}
            >
                {deleteRecord}
            </div>

        </Link >
    );
};

export default DeleteBtn;

DeleteBtn.propTypes = {
    onClick: PropTypes.func.isRequired
};
DeleteBtn.defaultProps = {
    linkTo: '/'
};