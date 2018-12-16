import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import NavBar from './NavBar';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <RecipeList />
        </header>
      </div>
    );
  }
}

export default RecipeApp;
