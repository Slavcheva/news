import './Aside.css'
import React from "react";
import service from "../../service";
import News from "../News/News";

const Aside = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        service.getTop().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <aside className="site-aside">
            <News publications={publications}/>
        </aside>
    )
}

export default Aside
