import CategoryItem from "../category-items/Category-item";
import "./Directory-style.scss";

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
