import React from 'react';
import './games-list.scss';
import {dateFormat} from '../../components/Conversion';

export default function GameList(props) {
    const data = props.games;

    return (
        <>
            <div className="col-6 col-lg-3 p-2">
                <div className="card p-0 bg-light h-100">
                    <figure className="custom-img-card overflow-hidden">
                        <img className="card-img-top" src={data.background_image} alt={data.name}/>
                    </figure>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="mb-2">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">Nota: {data.rating}/5.0</p>
                            <p className="card-text">Gênero:
                                {data.genres.map((item, i) => (
                                    <a key={i} href={`/genero/${item.slug}`} className="mx-1 badge badge-secondary">{item.name}</a>
                                ))}
                            </p>
                            <p className="card-text">Plataforma:
                                {data.platforms.map((item, i) => (
                                    <a key={i} href={`/plataforma/${item.platform.slug}`} className="mx-1 badge badge-secondary">{item.platform.name}</a>
                                ))}
                            </p>
                            <p className="card-text">
                                Lançamento: {dateFormat(data.released)}
                            </p>
                        </div>
                        <a href={`/game/${data.slug}`} className="btn btn-primary btn-block">Ver mais</a>
                    </div>
                </div>
            </div>
        </>
    );
}