import SourcesDetails from "./SourcesDetails/SourcesDetails";

const SourcesList = ({
                         sources
                     }) => {

    const chooseSources = ["bbc-news", "nbc-news", "associated-press", "reuters", "medical-news-today", "national-geographic", "business-insider", "fox-sports", "mtv-news"];

    return (
        <ul className="sources-list">
            {sources.filter(source => chooseSources.includes(source.id)).map(source =>
                <SourcesDetails key={source.id} source={source}/>
            )}
        </ul>
    )
};

export default SourcesList