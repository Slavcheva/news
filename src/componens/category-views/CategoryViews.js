import "./CategoryViews.css"
import Business from "./Business";
import Science from "./Science";
import Health from "./Health";
import Sports from "./Sports";

const CategoryViews = () => {
    return (
        <section className="category-view">
            <Business/>
            <Science/>
            <Health/>
            <Sports/>
        </section>
    )
};

export default CategoryViews