import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import GameList from '../../components/GameList';
import Loading from '../../components/Loading';

export default function Home() {

    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const time = new Date();
    const dia = ((time.getDate()) < 10 ? '0' : '') + (time.getDate()); // adiciona um '0' em numeros menores que 10
    const mes = ((time.getMonth() + 1) < 10 ? '0' : '') + (time.getMonth() + 1); // adiciona um '0' em numeros menores que 10
    const ano = time.getFullYear();
    const anoPassado = (ano - 1) + '-' + mes + '-' + dia;
    const hoje = ano + '-' + mes + '-' + dia;

    useEffect(() => {
        setIsLoading(true);
        api.get(`games?dates=${anoPassado},${hoje}&ordering=-added&page=${page}`).then(response => {
            setGames(response.data.results);
            setIsLoading(false);
        }).catch(() => {
            alert('Oops, aconteceu um erro, tente mais tarde.');
            setIsLoading(false);
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

            {isLoading ? ('') : (
                <nav aria-label="Page navigation" className="mt-5 w-100">
                    <ul className="pagination justify-content-center pagination-lg">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(1)}>1</button>
                        </li>
                        <li className={`page-item ${page === 2 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(2)}>2</button>
                        </li>
                        <li className={`page-item ${page === 3 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(3)}>3</button>
                        </li>
                        <li className={`page-item ${page === 4 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(4)}>4</button>
                        </li>
                        <li className={`page-item ${page === 5 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(5)}>5</button>
                        </li>
                    </ul>
                </nav>
            )}
            <Loading status={isLoading}/>
        </section>
    );
}