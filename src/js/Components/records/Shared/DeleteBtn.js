import React from 'react';

import { Modal } from './Modal';

export const DeleteBtn = ({ title, onClick, artist, className }) => (

    <Modal
        className={className}
        title={title}
        artist={artist}
        onClick={onClick}
         />

);