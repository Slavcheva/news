import React from "react";

import "./Aside.css";
import service from "../../service";
import NewsList from "../News/NewsList";

const Aside = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        service.getTop().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <aside className="site-aside">
            <h2>Top Headlines</h2>
            <NewsList publications={publications}/>
        </aside>
    )
}

export default Aside
