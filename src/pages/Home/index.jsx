import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import GameList from '../../components/GameList';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

export default function Home() {

    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        api.get(`games?dates=2019-01-01,2019-12-31&ordering=-added&page=${page}`).then(result => {
            setGames(result.data.results);
        });
        document.querySelector('html,body').scrollTop = 0;
    }, [page]);

    return (
        <section className="col-12">
            <h2 className="text-light">Mais populares</h2>
            <div className="row d-flex">
                {games.map((card, index) => (
                    <GameList key={index} games={card}/>
                ))}
            </div>
            <div className="w-100 mt-4 d-flex flex-row justify-content-center">
                <button onClick={() => setPage(page - 1)} className="btn btn-secondary mr-3" disabled={page <= 1}><FaChevronLeft/> Anterior</button>
                <button onClick={() => setPage(page + 1)} className="btn btn-secondary">Próxima <FaChevronRight/></button>
            </div>
        </section>
    );
}