import React, {useEffect, useState} from 'react';
import {numericFormat} from '../../components/Conversion';
import MiniCard from '../../components/MiniCard';
import api from '../../services/api';
import Loading, {adjusments} from '../../components/Loading';

export default function Desenvolvedores() {

    const [devData, setDevData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        api.get(`/developers?page_size=40&page=${page}`).then((response) => {
            setDevData(response.data);
            setIsLoading(false);
            adjusments();
        }).catch(() => {
            alert('Oops, aconteceu um erro, tente mais tarde.');
            setIsLoading(false);
        });
        document.querySelector('html,body').scrollTop = 0;
    }, [page]);
    return (
        <section className="col-12 min-vh-100">
            <h2 className="text-light">Desenvolvedores ({numericFormat(devData.count)})</h2>
            <div className="row">
                {devData.results !== undefined ? (
                    devData.results.map((item, i) => (
                        <MiniCard key={i} page="desenvolvedor" data={item}/>
                    ))
                ) : ('')}
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