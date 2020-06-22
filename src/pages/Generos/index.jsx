import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import MiniCard from '../../components/MiniCard';
import './genres.scss';
import Loading, {adjusments} from '../../components/Loading';

export default function Generos() {

    const [genreData, setGenreData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getGenres() {
        await api.get('/genres')
            .then((response) => {
                setGenreData(response.data);
                setIsLoading(false);
                adjusments();
            })
            .catch(() => {
                alert('Oops, aconteceu um erro, tente mais tarde.');
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <section className="col-12">
            <h2 className="text-light">Gêneros ({genreData.count})</h2>
            <div className="row">
                {genreData.results !== undefined ? (
                    genreData.results.map((item, i) => (
                        <MiniCard key={i} page="genero" data={item}/>
                    ))
                ) : ('')}
            </div>
            <Loading status={isLoading}/>
        </section>
    );
}