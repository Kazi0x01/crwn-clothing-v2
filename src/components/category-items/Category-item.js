import "./Category-item-style.scss";

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <div className="category-container" key={id}>
      {/* <img /> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
