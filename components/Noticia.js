import React from 'react';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                { urlToImage !== "" ? <img src={urlToImage} alt={title} className="card-img-top"/> 
                : <img src="bitcoin.jpg" alt={title} className="card-img-top"/> }
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-success d-block">Leer Noticia</a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;