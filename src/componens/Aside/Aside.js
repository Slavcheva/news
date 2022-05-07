import React from "react";

import "./Aside.css";
import services from "../../services";
import NewsList from "../publications/NewsList";
import SourcesList from "../sources/SourcesList";

const Aside = () => {
    const [publications, setPublications] = React.useState([]);
    const [sources, setSources] = React.useState([]);

    React.useEffect(() => {
        services.getTop().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);


    React.useEffect(() => {
        services.getBySource().then((sources) => {
            setSources(sources.sources);
        });
    }, []);

    return (
        <aside className="site-aside">
                <h3>Top Headlines</h3>
                <NewsList publications={publications}/>

                <h3>News Sources</h3>
                <SourcesList sources={sources}/>
        </aside>
    )
}

export default Aside
