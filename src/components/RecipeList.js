import { Link } from "react-router-dom";

import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div className="error fade-in">
        <p>No recipes found...</p>
        <p style={{ fontSize: "1rem", marginTop: "0.8rem", fontStyle: "italic", color: "#000" }}>
          Try searching for something else
        </p>
      </div>
    );
  }

  return (
    <div className="recipe-list fly-in">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <div className="img" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
