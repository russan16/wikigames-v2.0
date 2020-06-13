import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import GameList from '../../components/GameList';
import Loading from '../../components/Loading';

export default function Busca(props) {

    const [busca, setBusca] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const search = props.match.params.busca;

    useEffect(() => {
        setIsLoading(true);
        api.get(`/games?search=${search}`).then(response => {
            setBusca(response.data.results);
            setIsLoading(false);
            setFailed(false);
            if (busca.length === 0)
                setFailed(true);
        }).catch(e => {
            console.log(e);
        });
        document.querySelector('html,body').scrollTop = 0;
    }, [page, search]);

    console.log(busca);

    return (
        <section className="col-12">
            <h2 className="text-light">Resultado da busca por "<span className="text-capitalize">{search}</span>"</h2>
            <div className="row d-flex">
                {busca.length !== 0 ? (
                    busca.map((card, index) => (
                        <GameList key={index} games={card}/>
                    ))
                ) : (<h4 className={`w-100 text-light text-center p-4 ${failed ? '' : 'd-none'}`}>Nenhum resultado encontrado</h4>)}
            </div>

            {!failed ? (
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