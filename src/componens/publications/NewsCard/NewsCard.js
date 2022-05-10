import React from "react";

import "./NewsCard.css"

const NewsCard = ({
                      publication
                  }) => {
    return (
        <a className="card" target="_blank" rel="noreferrer noopener" href={publication.url} >
                <div className="card-img">
                    <img src={publication.urlToImage} alt="" loading="lazy"/>
                </div>
                <div className="card-content">
                    <span className="source">{publication.source.name}</span>
                    <h4> {publication.title}</h4>
                    <div className="full-info">
                        <p>{publication.description}</p>
                        <p><small>{publication.publishedAt}</small></p>
                    </div>
                </div>
        </a>
    );
}

export default NewsCard;