import NewsCard from "./NewsCard/NewsCard";

const NewsList = ({
                  publications
              }) => {
    return (
        <div>
             {publications
                ? (
                    <ul className="publications-list">
                        {publications.map(publication =>
                            <NewsCard key={publication.url} publication={publication}/>
                        )}
                    </ul>
                )
                : <p>Loading...</p>
            }
        </div>
    )
};

export default NewsList