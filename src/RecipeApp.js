import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RecipeList />
        </header>
      </div>
    );
  }
}

export default RecipeApp;
