import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-footer jumbotron bg-transparent row rounded-0 mt-5 border-top">
            <small className="col-12 col-md-6 text-light text-center">Desenvolvido por Italo Russan <a className="btn-link" href="mailto:russan16@gmail.com" target="_blank" rel="noopener noreferrer">russan16@gmail.com</a></small>
            <small className="col-12 col-md-6 text-light text-center">WikiGames powered by <a className="btn-link" href="https://rawg.io/" target="_blank" rel="noopener noreferrer">RAWG Video Games Database API</a></small>
        </footer>
    );
};