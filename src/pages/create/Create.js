import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const [image, setImage] = useState("");
  const ingredientInput = useRef(null);

  const { postData, data, error } = useFetch(
    "https://recipe-app-backend-igor.herokuapp.com/recipes",
    "POST"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, ingredients, method, cookingTime: cookingTime + " minutes", image });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredient((prevIngredients) => {
        return [...prevIngredients, ing];
      });
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create fade-in">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title :</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>
        <label>
          <span>Recipe Ingredients :</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients :{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <span>Recipe Method :</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>
        <label>
          <span>Recipe image :</span>
          <input className="img-input" type="text" onChange={(e) => setImage(e.target.value)} value={image} required placeholder="Please paste an image URL here."/>
        </label>
        <label>
          <span>Cooking Time (minutes) :</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
