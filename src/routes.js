import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import InternaGame from './pages/InternaGame';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/game/:slug" component={InternaGame}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;