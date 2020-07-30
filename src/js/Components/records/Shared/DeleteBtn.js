import React from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from 'react-router-dom';
import { CONTENT } from '@common/constants/content';



const DeleteBtn = ({ onClick, linkTo }) => {

    const history = useHistory();

    const pathName = history.location.pathname;

    const { deleteRecord } = CONTENT;
    return (

        <Link to={linkTo ? linkTo : pathName} role="button" className="btn-danger">
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