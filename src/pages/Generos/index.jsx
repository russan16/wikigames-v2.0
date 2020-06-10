import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from "react-router-dom";
import {numericFormat} from '../../components/Conversion';
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

    console.log(genreData);
    return (
        <section className="col-12">
            <h2 className="text-light">Gêneros ({genreData.count})</h2>
            <div className="row">
                {genreData.results !== undefined ? (
                    genreData.results.map((item, i) => (
                        <div key={i} className="col-lg-3 p-2 overflow-hidden">
                            <figure className="custom-img-card-mini m-0">
                                <img src={item.image_background} className="img-fluid rounded-0" alt={item.name}/>
                            </figure>
                            <Link className="btn btn-block btn-primary rounded-0" to={item.slug}>{item.name} <span className="badge">{numericFormat(item.games_count)}</span></Link>
                        </div>
                    ))
                ) : ('')}
            </div>
        </section>
    );
}