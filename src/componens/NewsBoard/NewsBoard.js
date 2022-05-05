import React from "react";
// import './NewsBoard.css'
import News from "../../componens/News/News";
import service from "../../service";

const NewsBoard = () => {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        service.getAll().then((publications) => {
            setPublications(publications.articles);
        });
    }, []);
    console.log(publications);

    return(
        <div>
            <News publications={publications}/>
        </div>
    )

};

export default NewsBoard