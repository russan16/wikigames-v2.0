import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import InternaGame from './pages/InternaGame';
import Generos from './pages/Generos';
import Desenvolvedores from './pages/Desenvolvedores';
import Plataformas from './pages/Plataformas';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/game/:slug" component={InternaGame}/>
            <Route path="/generos" component={Generos}/>
            <Route path="/desenvolvedores" component={Desenvolvedores}/>
            <Route path="/plataformas" component={Plataformas}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;