import React from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from '@common/constants/content';

const { details } = CONTENT;
const DetailsLink = ({ id }) => (

    <Link className='btn-primary details-btn' to={`/details/${id}`}>{details}</Link>

);

export default DetailsLink;