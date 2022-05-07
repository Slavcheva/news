import React from "react";

import "./CategoryViews.css"
import services from "../../services";
import NewsList from "../publications/NewsList";


const Health = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        services.getByCategory("health").then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <div className="category">
            <h3>Health</h3>
            <NewsList publications={publications}/>
        </div>
    )

};

export default Health