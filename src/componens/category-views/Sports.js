import React from "react";

import "./CategoryViews.css"
import services from "../../services";
import NewsList from "../publications/NewsList";

const Sports = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        services.getByCategory("sports").then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <div className="category">
            <h3>Sports</h3>
            <NewsList publications={publications}/>
        </div>
    )

};

export default Sports