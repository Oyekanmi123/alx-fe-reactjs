import { useParams, Link } from 'react-router-dom';
import {useRecipeStore} from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) return <h2>Recipe Not Found</h2>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;