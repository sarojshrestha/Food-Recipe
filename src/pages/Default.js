import React, { Component } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Header title="404" styleClass={'default-hero'}>
                <h1 className="text-light text-uppercase">You are in wrong page!</h1>
                <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">return home</Link>
            </Header>
        );
    }
}

export default Default;