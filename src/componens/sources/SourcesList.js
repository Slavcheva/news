import SourcesDetails from "./SourcesDetails/SourcesDetails";

const SourcesList = ({
                     sources
              }) => {
    const chooseSources = ["bbc-news", "nbc-news", "associated-press", "reuters", "medical-news-today", "national-geographic", "business-insider", "fox-sports", "mtv-news"];


    return (
        <div>
             {sources
                ? (
                    <ul className="sources-list">
                        {sources.filter(source =>chooseSources.includes(source.id)).map(source =>
                            <SourcesDetails key={source.id} source={source}/>
                        )}
                    </ul>
                )
                : <p>Loading...</p>
            }
        </div>
    )
};

export default SourcesList