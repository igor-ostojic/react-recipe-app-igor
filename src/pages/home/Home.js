import { useFetch } from "../../hooks/useFetch";

//styles
import "./Home.css";

//components
import RecipeList from "../../components/RecipeList";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, isPending, error } = useFetch(
    "https://recipe-app-backend-igor.herokuapp.com/recipes"
  );
  return (
    <div className="home fly-in">
      {error && <p className="error">{error}</p>}
      {isPending && <Loader />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
