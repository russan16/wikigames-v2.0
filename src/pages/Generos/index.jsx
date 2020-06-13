import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import MiniCard from '../../components/MiniCard';
import './genres.scss';
import Loading from '../../components/Loading';

export default function Generos() {

    const [genreData, setGenreData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/genres')
            .then((response) => {
                setGenreData(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                alert('Oops, aconteceu um erro, tente mais tarde.');
                setIsLoading(false);
            })
    }, []);

    return (
        <section className="col-12">
            <h2 className="text-light">Gêneros ({genreData.count})</h2>
            <div className="row">
                {genreData.results !== undefined ? (
                    genreData.results.map((item, i) => (
                        <MiniCard key={i} data={item}/>
                    ))
                ) : ('')}
            </div>
            <Loading status={isLoading}/>
        </section>
    );
}