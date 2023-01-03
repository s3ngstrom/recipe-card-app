import React from "react";
import RecipeView from "./RecipeView"

function RecipeList({ recipes, deleteRecipe }) {
  console.log(recipes)
  return (
     // Display the list of recipes using the structure of table that is provided.
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* // Create at least one additional component that is used by this component.*/}
        {recipes.map((recipe, index) => (
          <RecipeView
            deleteRecipe={() => deleteRecipe(index)}
            key={index}
            recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
