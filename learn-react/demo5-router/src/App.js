import React from 'react';
import {HashRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NotFound from './NotFound';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
);

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home </Link>
                <Link to="/About">About </Link>
                <Link to="/Product">Product </Link>
                <hr/>
                <Switch>
                    <Route path="/" exact component={Home}>Home</Route>
                    <Route path="/About" component={About}>About</Route>
                    <Route path="/Product" component={Product}>Product</Route>
                    {/*<Route component={NotFound}> not found </Route>*/}
                    <Route render={() => <Redirect to="/" />}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
