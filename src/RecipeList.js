import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    render() {
        const recipeList = ["Pasta", "Sushi", "Dumplings"];
        return (
            <div className="recipe-list">
                {recipeList.map((title, index,) => (
                    <Recipe
                    key={index}
                    title={recipeList[index]}
                    ingredients={["flour", "water"]}
                    instructions="Mix ingredients"
                    img="spaghetti.jpg"
                    />
                ))}
            </div>
        );
    }
}

export default RecipeList;