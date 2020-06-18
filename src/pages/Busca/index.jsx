import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {numericFormat} from '../../components/Conversion';
import GameList from '../../components/GameList';
import Loading from '../../components/Loading';

export default function Busca() {

    const [busca, setBusca] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const search = localStorage.getItem('lastSearch');

    useEffect(() => {
        setIsLoading(true);
        api.get(`/games?search=${search}&page_size=40&page=${page}`).then(response => {
            setBusca(response.data.results);
            setCount(response.data.count);
            setIsLoading(false);
            setFailed(false);
            /*if (busca.length === 0)
                setFailed(true);*/
        }).catch(() => {
            alert('Oops, aconteceu um erro, tente mais tarde.');
            setIsLoading(false);
            setFailed(true);
        });
        document.querySelector('html,body').scrollTop = 0;
    }, [page, search]);

    return (
        <section className="col-12">
            <h2 className="text-light">{count ? numericFormat(count) : 0} resultados para "<span className="text-capitalize">{search}</span>"</h2>
            <div className="row d-flex">
                {count !== 0 ? (
                    busca.map((card, index) => (
                        <GameList key={index} games={card}/>
                    ))
                ) : (<h4 className="w-100 text-light text-center p-4">Nenhum resultado encontrado</h4>)}
            </div>

            {!failed && !isLoading && count >= 200 ? (
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
            ) : ('')}
            <Loading status={isLoading}/>
        </section>
    );
}