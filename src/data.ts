export type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
};

export const recipes: Recipe[] = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomato", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: [
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ],
  },
];
