import { recipes } from "./data";
import Recipe from "./Recipe";

export default function RecipeList() {
  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
