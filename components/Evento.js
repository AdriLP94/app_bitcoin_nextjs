import React from 'react';

const Evento = ({info}) => {

    const {name, url} = info;
    return (
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{name.text}</h3>
        </a>
    );
};

export default Evento;