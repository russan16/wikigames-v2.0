import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import InternaGame from './pages/InternaGame';
import InternaPlataformas from './pages/InternaPlataformas';
import InternaDesenvolvedores from './pages/InternaDesenvolvedores';
import InternaGeneros from './pages/InternaGeneros';
import Generos from './pages/Generos';
import Desenvolvedores from './pages/Desenvolvedores';
import Plataformas from './pages/Plataformas';
import Busca from './pages/Busca';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/game/:slug" component={InternaGame}/>
            <Route path="/generos" component={Generos}/>
            <Route path="/desenvolvedores" component={Desenvolvedores}/>
            <Route path="/plataformas" component={Plataformas}/>
            <Route path="/plataforma/:id/:name" component={InternaPlataformas}/>
            <Route path="/desenvolvedor/:id/:name" component={InternaDesenvolvedores}/>
            <Route path="/genero/:id/:name" component={InternaGeneros}/>
            <Route path="/busca" component={Busca}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default Routes;