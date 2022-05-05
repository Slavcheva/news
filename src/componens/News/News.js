import './News.css'
import NewsCard from "../../componens/NewsCard/NewsCard";

const News = ({
    publications
              }) => {
    return(
        <div>
            {publications
                ? (
                    <ul className="publications-list">
                        {publications.map(publication => <NewsCard key={publication._id} publication={publication} />)}
                    </ul>
                )
                : <p className="no-publications">No publications in database!</p>
            }
        </div>
    )
};

export default News