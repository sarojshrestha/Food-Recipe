import React, { Component } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Header title="amazing recipe">
                <Link to="recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
                    Search Recipes
            </Link>
            </Header>
        );
    }
}

export default Home;