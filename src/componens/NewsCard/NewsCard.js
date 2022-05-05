import './NewsCard.css'

const NewsCard = ({
                      publication
                  }) => {
    return (
        <li className="card">
            <div className="card-img"><img src={publication.urlToImage}/></div>
            <div className="card-content">
                <span className="source">{publication.source.name}</span>
                <h3> {publication.title}</h3>
                <p>{publication.description}</p>
                <span><small>Author:</small>{publication.author}</span>
            </div>
        </li>
    );
}

export default NewsCard;