import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions:"Open jar of Spaghetti sauce and pour it with the boiled spaghetti. Afterwards, go to a Italian restaurant for some nice spaghuetti.",
                ingredients: [ 
                    "500g beef mince",
                    "1 onion, chopped",
                    "4 cloves garlic, minced",
                    "1 small green capsicum, diced",
                    "1 (800g) tin diced tomatoes",
                    "400g tomato pasta sauce",
                    "185g tomato paste",
                    "2 teaspoons dried oregano",
                    "2 teaspoons dried basil",
                    "1 teaspoon salt",
                    "1/2 teaspoon black pepper"
                    ],
                img: 'spaghetti.jpg'
            },
            {
                title: "Spanish omelette",
                instructions:"Ask Karlos Arguiñano for further instructions",
                ingredients: [
                    "500g new potato", 
                    "1 onion", 
                    "150ml extra-virgin olive oil",
                    "3 tbsp chopped flat-leaf parsley",
                    "6 eggs"
                    ],
                img: 'omelette.jpeg'
            },
            {
                title: "Dumplings",
                instructions:"Make them carefully",
                ingredients: [
                    "1 baby pak choy",
                    "3 garlic cloves, crushed",
                    "1 tablespoon oyster sauce",
                    "150g firm tofu",
                    "30 (275g packet) gow gee wrappers"
                    ],
                img: 'dumplings.jpg'
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        const recipes = this.props.recipes.map((rest, index,) => (
            <Recipe key={index} {...rest} />
        ))
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;