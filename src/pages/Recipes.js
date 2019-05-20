import React, { Component } from 'react';
import RecipeList from '../component/RecipeList';
import Search from '../component/Search';
import { recipeData } from '../data/tempList';

class Recipes extends Component {


    state = {
        recipes: recipeData,
        search: ''

    }
    handleChange = (e) => {
        console.log('handlechange', e);

        this.setState({
            search: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Search search={this.state.search} handleChange={this.handleChange} />
                <RecipeList recipes={this.state.recipes} />
            </React.Fragment>);
    }
}

export default Recipes;