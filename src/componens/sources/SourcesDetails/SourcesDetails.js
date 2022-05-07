import React from "react";

import "./SourcesDetails.css"

const SourcesDetails = ({
                            source
                        }) => {

    return (
        <div className='source-details'>
            <h5 className="source-name">{source.name}</h5>
            <a target="_blank" rel="noreferrer noopener" href={source.url}>{source.url}</a>
            <p>{source.description}</p>
        </div>
    );
}

export default SourcesDetails;