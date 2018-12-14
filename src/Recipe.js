import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        const {title, instructions, img} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return(
            <div>
                <div>Recipe {title}</div>
                <ul>
                    {ingredients}
                </ul>
                <p>{instructions}</p>
                <img src={img} alt={title} />
            </div>
        );
    }
}

export default Recipe;