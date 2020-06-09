import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch} from 'react-icons/fa';

export default function Header() {
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

    function currentPage(url) {
        setBtnSelected(url);
    }
    console.log(menu);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <a className="navbar-brand" href="#">WikiGames</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {menu.map((item, index) => (
                            <li onClick={() => currentPage(item.url)} key={index} className={`nav-item ${btnSelected === item.url ? 'active' : ''}`}>
                                <a className="nav-link" href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Nome do jogo"/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
                            <FaSearch /> Buscar
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
}