import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import MiniCard from '../../components/MiniCard';
import './genres.scss';

export default function Generos() {

    const [genreData, setGenreData] = useState([]);

    useEffect(() => {
        api.get('/genres')
            .then((response) => {
                setGenreData(response.data);
            })
            .catch((error) => {
                console.log(error);
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
        </section>
    );
}