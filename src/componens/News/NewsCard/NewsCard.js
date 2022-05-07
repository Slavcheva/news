import React from "react";

import "./NewsCard.css"

const NewsCard = ({
                      publication
                  }) => {
    return (
        <a className="card" href={publication.url}>
            <article className="article">
                <div className="card-img">
                    <img src={publication.urlToImage} alt=""/>
                </div>
                <div className="card-content">
                    <span className="source">{publication.source.name}</span>
                    <h3> {publication.title}</h3>
                    <div className="full-info">
                        <p>{publication.description}</p>
                        <small>{publication.publishedAt}</small>
                        {/*<span>{publication.author}</span>*/}
                    </div>
                </div>
            </article>
        </a>
    );
}

export default NewsCard;