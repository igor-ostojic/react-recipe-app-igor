import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = "https://recipe-app-backend-igor.herokuapp.com/recipes/" + id;
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="recipe fade-in">
      {error && <p className="error">{error}</p>}
      {isPending && <Loader />}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <div className="img" style={{ backgroundImage: `url("${data.image}")` }}></div>
          <p>
            Takes <span>{data.cookingTime}</span> to cook.
          </p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
