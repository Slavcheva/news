import React from "react";

import "./Home.css"
import services from "../../services";
import NewsList from "../publications/NewsList";
import Aside from "../Aside/Aside";
import CategoryViews from "../category-views/CategoryViews";

const Home = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        services.getAll().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);

    return (
        <div className="home-page">
            <section className="main-section">
                <NewsList publications={publications}/>
            </section>
            <Aside/>
            <CategoryViews/>
        </div>
    )
}
export default Home
