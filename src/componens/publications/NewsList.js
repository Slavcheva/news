import NewsCard from "./NewsCard/NewsCard";

const NewsList = ({
                      publications
                  }) => {
    return (
        <ul className="publications-list">
            {publications.map(publication =>
                <NewsCard key={publication.url} publication={publication}/>
            )}
        </ul>
    )
};

export default NewsList