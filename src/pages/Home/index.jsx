import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import GameList from '../../components/GameList';

export default function Home() {

    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        api.get(`games?dates=2019-01-01,2019-12-31&ordering=-added&page=${page}`).then(result => {
            setGames(result.data.results);
        });
    }, []);

    return (
        <section className="col-12">
            <h2 className="text-light">Mais populares</h2>
            <div className="row d-flex">
                {games.map((card, index) => (
                    <GameList key={index} games={card}/>
                ))}
            </div>
        </section>
    );
}