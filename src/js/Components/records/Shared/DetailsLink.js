import React from 'react';
import { Link } from 'react-router-dom';

const DetailsLink = ({ id }) => (

    <Link to={`/details/${id}`}>Detaljer</Link>

);

export default DetailsLink;