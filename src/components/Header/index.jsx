import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/js/dist/collapse';

import {Link, useHistory} from 'react-router-dom';
import {FaSearch, FaGamepad} from 'react-icons/fa';
import imgHeader from '../../assets/images/header.jpg';

export default function Header() {

    const history = useHistory();

    const menu = [
        {
            title: "Home",
            url: '/'
        },
        {
            title: "Desenvolvedores",
            url: "/desenvolvedores"
        },
        {
            title: "Gêneros",
            url: "/generos"
        },
        {
            title: "Plataformas",
            url: "/plataformas"
        }
    ];

    const [btnSelected, setBtnSelected] = useState('/');

    const [search, setSearch] = useState('');

    function doTheSearch() {
        if (search !== '') {
            localStorage.setItem('lastSearch', search);
            history.push('/busca');
        } else {
            alert('Digite o nome de um jogo');
            return false;
        }
    }

    function currentPage(url) {
        setBtnSelected(url);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top row">
                <Link className="navbar-brand" to="/" title="WikiGames Home">
                    <FaGamepad size={40}/> WikiGames
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {menu.map((item, index) => (
                            <li onClick={() => currentPage(item.url)} key={index} className={`nav-item ${btnSelected === item.url ? 'active' : ''}`}>
                                <Link className="nav-link" to={item.url}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={(e) => {e.preventDefault()}} className="form-inline my-2 my-lg-0">
                        <input onChange={(e) => {
                            setSearch(e.target.value)
                        }} className="form-control mr-sm-2" type="search" placeholder="Nome do jogo"/>
                        <button onClick={() => doTheSearch()} className="btn btn-outline-light my-2 my-sm-0 d-none d-md-inline-block" type="submit">
                            <FaSearch/> Buscar
                        </button>
                    </form>
                </div>
            </nav>

            <header className="row">
                <figure className="p-0">
                    <img className="img-fluid" src={imgHeader} alt="Wiki Games"/>
                </figure>
            </header>
        </>
    );
}