import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import InternaGame from './pages/InternaGame';
import Generos from './pages/Generos';

const Routes = () => (
    <BrowserRouter>
        <Header pageName={'Home'} />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/game/:slug" component={InternaGame}/>
            <Route path="/generos" component={Generos}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;