import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import About from './About';
import Login from './Login';
import Contact from './Contact';
import './App.css';

class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <NavBar />
                                <SearchBar />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </Router>
        );
    }
} 

export default App;
