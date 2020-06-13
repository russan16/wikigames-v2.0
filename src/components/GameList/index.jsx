import React from 'react';
import {Link} from 'react-router-dom';
import {dateFormat} from '../../components/Conversion';
import NoImg from '../../assets/images/no-img.jpeg';
import './games-list.scss';

export default function GameList(props) {
    const data = props.games;

    return (
        <>
            <div className="col-6 col-lg-3 p-2">
                <div className="card p-0 bg-light h-100">
                    <figure className="custom-img-card overflow-hidden">
                        <img className="card-img-top" src={data.background_image ? (data.background_image) : (NoImg)} alt={data.name}/>
                    </figure>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="mb-2">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">Nota: {data.rating}/5.0</p>
                            <p className="card-text">Gênero:
                                {data.genres != '' ? (
                                    data.genres.map((item, i) => (
                                        <Link key={i} to={`/genero/${item.slug}`} className="mx-1">{item.name}</Link>
                                    ))
                                ) : (<span> N/D</span>)}
                            </p>
                            <p className="card-text">Plataforma:
                                {data.platforms !== null ? (
                                    data.platforms.map((item, i) => (
                                        <Link key={i} to={`/plataforma/${item.platform.slug}`} className="mx-1">{item.platform.name}</Link>
                                    ))
                                ) : (<span> N/D</span>)}
                            </p>
                            <p className="card-text">
                                Lançamento: {data.released !== null ? (dateFormat(data.released)) : (<span> N/D</span>)}
                            </p>
                        </div>
                        <Link to={`/game/${data.slug}`} className="btn btn-primary btn-block mt-2">Ver mais</Link>
                    </div>
                </div>
            </div>
        </>
    );
}