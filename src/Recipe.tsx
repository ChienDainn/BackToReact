type RecipeProps = {
  name: string;
  ingredients: string[];
};

export default function Recipe({ name, ingredients }: RecipeProps) {
  return (
    <section className="recipe">
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
