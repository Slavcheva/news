import React from "react";

import services from "../../services";
import NewsList from "../publications/NewsList";

const Business = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        services.getByCategory("business").then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <div className="category">
            <h3>Business</h3>
            <NewsList publications={publications}/>
        </div>
    )

};

export default Business