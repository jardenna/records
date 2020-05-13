import React from 'react';
import { Link } from 'react-router-dom';

const DetailsLink = ({ id }) => (

    <Link to={`/details/${id}`}><button className='btn-primary details-btn'>Detaljer</button></Link>

);

export default DetailsLink;