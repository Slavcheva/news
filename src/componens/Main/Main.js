import React from "react";

import "./Main.css"
import service from "../../service";
import NewsList from "../News/NewsList";

const Main = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        service.getAll().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
            <main className="site-main">
                <NewsList publications={publications}/>
            </main>
    )
}
export default Main
