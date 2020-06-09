import React from 'react';
import './games-list.scss';

export default function GameList(props) {
    const data = props.games;

    function dateFormat(date) {
        const newDate = new Date(date);
        const format = Intl.DateTimeFormat('pt-BR').format(newDate);
        return format;
    }

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
                            <p className="card-text">Nota: {data.rating}</p>
                            <p className="card-text">Gênero:</p>
                            <p className="card-text">Desenvolvedor:</p>
                            <p className="card-text">
                                <small className="text-muted">Lançamento: {dateFormat(data.released)}</small>
                            </p>
                        </div>
                        <a href={`/game/${data.slug}`} className="btn btn-primary btn-block">Ver mais</a>
                    </div>
                </div>
            </div>
        </>
    );
}