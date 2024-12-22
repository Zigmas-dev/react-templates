import "./categoriestags.scss";

const CategoriesTags = () => {
  return (
    <div className="categories-tags">
      <h1>Kategorijos ir žymos</h1>
      <div className="categories">
       <button>Kategorija 1</button>
       <button>Kategorija 2</button>
       <button>Kategorija 3</button>
      </div>
      <div className="tags">
       <button>Žyma 1</button>
       <button>Žyma 2</button>
       <button>Žyma 3</button>
      </div>
    </div>
  );
};

export default CategoriesTags;