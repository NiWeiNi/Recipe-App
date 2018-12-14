import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Recipe
            title="Pasta"
            ingredients={['flour', 'water']}
            instructions="Mix ingredients"
            img="spaghetti.jpg"
          />
        </header>
      </div>
    );
  }
}

export default RecipeApp;
