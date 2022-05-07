import React from "react";

import services from "../../services";
import NewsList from "../publications/NewsList";

const Science = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        services.getByCategory("science").then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <div className="category">
            <h3>Science</h3>
            <NewsList publications={publications}/>
        </div>
    )

};

export default Science